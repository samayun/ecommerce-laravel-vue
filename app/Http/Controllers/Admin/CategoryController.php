<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Policies\CategoryPolicies;
use App\Models\Category;
use App\Models\Admin;
use App\Traits\UploadAble;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Auth;
use DB;
use Illuminate\Support\Facades\Storage;

use function PHPUnit\Framework\isNull;

class CategoryController extends Controller
{
    use UploadAble;

    public function __construct()
    {
        $this->authorizeResource(Category::class, 'category');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function all_categories(Request $request)
    {
        if($request->has('with') && $request->with == 'subcategories'){
            return Category::with('subcategories')->latest()->get();
        }
        if($request->has('with') && $request->with == 'products'){
            return Category::with('products')->latest()->get();
        }
        if($request->has('with') && $request->with == 'subcategories' || $request->with == 'products'   ) {
            return Category::with('subcategories')->with('products')->latest()->get();
        }
        return Category::latest()->get()->map(function($cat)
        {
            return [
                'id' => $cat->id,
                'name' => $cat->name,
                'slug' => $cat->slug,
                'icon' => $cat->icon ? url($cat->icon) :  Storage::url('categories/default.png')
            ];
        });
    }
    public function subcategories(Request $request)
    {
        // these code must be efactored - we wil need this again and again
        return Category::where('parent_id','!=',1)->with('category')->with('products')->filter($request);
    }

    public function index()
    {
        // these code must be efactored - we wil need this again and again
        return Category::where('parent_id',1)->with('subcategories')->with('products')->where('id','!=',1)->latest()->get();
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
            'slug' => $request->slug ? "alpha_dash|unique:categories,slug" : "",
            'icon' => $request->icon ? 'required' : '',
            'description' => $request->description ? 'required|min:3' : '',
            'parent_id' => !$request->icon ? 'required' : ''
        ]);
        if ($request->has('icon') && $request->icon != "" ) {
            $image      = $this->base64ToImage($request->icon)['image'];
            $extension  = $this->base64ToImage($request->icon)['extension'];
            $FileError = $this->setImageValidationError($extension,'icon',['jpg','jpeg','png','svg']);
            if ($FileError) {
                 return response()->json([
                    'message' => $FileError['error'],
                    'errors' => [
                        $FileError['feild'] => [ $FileError['error'] ]
                    ]
                ], $FileError['status']);
            }
            $uploadedFile = $this->uploadBase64File($request->icon , 'categories/','public');

            return Category::create([
                'name' => $request->name,
                'icon' => '/storage/categories/'.$uploadedFile['name']
            ]);
        }
        return Category::create($request->all()); // actually subcategory created
    }
    public function multiDelete(Request $request)
    {
        $this->authorize('multi_delete');
        try {

            foreach ($request->all() as $category) {
                $this->deleteFileFromServer($category['icon']);
                DB::beginTransaction();
                Category::find($category['id'])->delete();
                DB::commit();
            }

            return response()->json(['message' => "SUCCESS"], 200);
        } catch (\Throwable $th) {
            DB::rollback();
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return $category->products;
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
            'icon' =>  $request->icon ? 'required|min:6' : ''
        ]);
        if ($request->has('icon') && $request->icon != ""  && $request->icon !== $category->icon) {
            $image      = $this->base64ToImage($request->icon)['image'];
            $extension  = $this->base64ToImage($request->icon)['extension'];
            $FileError = $this->setImageValidationError($extension,'icon',['jpg','jpeg','png','svg']);
            if ($FileError) {
                 return response()->json([
                    'message' => $FileError['error'],
                    'errors' => [
                        $FileError['feild'] => [ $FileError['error'] ]
                    ]
                ], $FileError['status']);
            }

            $uploadedFile = $this->uploadBase64File($request->icon , 'categories/','public');

            return $category->update([
                'name' => $request->name,
                'icon' => '/storage/categories/'.$uploadedFile['name']
            ]);
        }
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
        $category = Category::where('id',$category->id)->first();
        try {
           if ($category->parent_id !== 1 && isNull($category->icon)) {
              $category->delete();
              return response()->json([
                    'message' => $category->name." deleted successfully"
                ], 200);
           }
            else if(isNull($category->icon) && $this->deleteBase64RequestedFile($category->icon) ){
                    DB::beginTransaction();
                    $category->delete();
                    DB::commit();
                    return response()->json([
                    'message' => $category->name." deleted successfully"
                ], 200);
            }



            return response()->json([
                'message' => $category->name." deleted failed"
            ], 404);
        } catch (\Throwable $th) {
            DB::rollback();
        }
    }
}
