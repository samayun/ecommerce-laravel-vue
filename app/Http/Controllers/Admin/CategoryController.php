<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Policies\CategoryPolicies;
use App\Models\Category;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use DB;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Category::class, 'category');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Category::latest()->paginate(5);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request , [
            'name' => 'bail|required|min:3',
            'icon' => 'required'
        ]);
        return Category::create($request->all());
    }
    public function multiDelete(Request $request)
    {
     if (Gate::forUser(\Auth::guard('admin')->user())->allows('super')) {
        try {
            DB::beginTransaction();
            foreach ($request->all() as $category) {
                $this->deleteFileFromServer(public_path().$category['icon']);
                Category::find($category['id'])->delete();
            }
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollback();
        }
     }
      return response()->json(['message' => 'Action Not Permitted'], 403);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return $category;
    }
    // Upload Images
    // @request file
    // @return filname.png etc  
    public function upload(Request $request){
        $this->validate($request,[
            'file' => 'required|mimes:jpg,jpeg,png|image'
        ]);
       $picName = time().'.'.$request->file->extension();
       $request->file->move(public_path('uploads/categories'),$picName);
       return $picName;
    }
    public function deleteImage(Request $request)
    {
        $filePath = public_path().$request->image;
        $this->deleteFileFromServer($filePath);
        return "done";
    }
    public function deleteFileFromServer($filePath)
    {
        if (file_exists($filePath)) {
           @unlink($filePath);
        }
        return;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $this->validate($request , [
            'name' => 'bail|required|min:3',
            'icon' => 'required'
        ]);
        return $category->update($request->except('id'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request , Category $category)
    {
        try {
            DB::beginTransaction();
            $this->deleteFileFromServer(public_path().$category->icon);
            // $this->validate($request , [
            //     // 'name' => 'bail|required|min:3',
            //     'id' => 'required',
            //     'icon' => 'required'
            // ]);
            $category->delete();
            DB::commit();
            return response()->json([
                'message' => $category->name." deleted successfully"
            ], 200);;
        } catch (\Throwable $th) {
            DB::rollback();
        }
    }
}
