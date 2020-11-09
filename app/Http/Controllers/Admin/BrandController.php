<?php

namespace App\Http\Controllers\Admin;

use App\Contracts\BrandContract;
use App\Http\Controllers\Controller;
// use App\Jobs\BrandImageUploading;
use App\Models\Brand;
use App\Traits\UploadAble;
use Illuminate\Auth\Access\Gate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Image;

class BrandController extends Controller
{

    use UploadAble;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $brandrepositories;
    public function __construct(BrandContract $brandrepositories)
    {
        $this->authorizeResource(Brand::class, 'brand');
        $this->brandrepositories = $brandrepositories;

    }
    public function index(Request $request)
    {
        return $this->brandrepositories->lists();
    }


     public function store(Request $request)
    {
        $this->validate($request , [
            'name' => 'bail|required|min:3|unique:brands,slug',
            'logo' => 'required'
        ]);
        // EVENT LISTENER

        $image      = $this->base64ToImage($request->logo)['image'];
        $extension  = $this->base64ToImage($request->logo)['extension'];
        $FileError = $this->setImageValidationError($extension,'logo',['jpg','jpeg','png','svg']);
        if ($FileError) {
             return response()->json([
                'message' => $FileError['error'],
                'errors' => [
                    $FileError['feild'] => [ $FileError['error'] ]
                ]
            ], $FileError['status']);
        }
        // // $uploadedFile = dispatch(new BrandImageUploading($request->logo));
        $uploadedFile = $this->uploadBase64File($request->logo , 'brands/','public');
        $attributes = [
            'name' => $request->name,
            'logo' => '/storage/brands/'.$uploadedFile['name']
        ];
        return $this->brandrepositories->create($attributes);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Brand $brand)
    {
        return $brand;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Brand $brand)
    {
        $this->validate($request , [
            'name' => 'bail|required|min:3',
            'slug' => 'required|unique:brands,slug,'.$request->id,
            'logo' => 'required'
        ]);
        if($request->logo !== $brand->logo){
            // DELETE OLD IMAGE FIRST
            $this->deleteBase64RequestedFile($brand->logo);
            // PROCESS :: FOR NEW UPLOAD
            $image      = $this->base64ToImage($request->logo)['image'];
            $extension  = $this->base64ToImage($request->logo)['extension'];
            $FileError = $this->setImageValidationError($extension,'logo',['jpg','jpeg','png','svg']);
            if ($FileError) {
                 return response()->json([
                    'message' => $FileError['error'],
                    'errors' => [
                        $FileError['feild'] => [ $FileError['error'] ]
                    ]
                ], $FileError['status']);
            }
            $uploadedFile = $this->uploadBase64File($request->logo , 'brands/','public');
            $attributes =  $brand->update([
                'name' => $request->name ,
                'slug' => $request->slug ,
                'logo' => '/storage/brands/'.$uploadedFile['name']
            ]);
            return $this->brandrepositories->update($attributes , $brand->id);
        }

        return $brand->update($request->except('id'));

    }

    public function multiDelete(Request $request)
    {
        $this->authorize('multi_delete');
        try {
            DB::beginTransaction();
            foreach ($request->all() as $brand) {
                $this->deleteFileFromServer($brand['logo']);
                Brand::find($brand['id'])->delete();
            }
            DB::commit();
            return response()->json(['message' => "SUCCESS"], 200);
        } catch (\Throwable $th) {

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $brand)
    {
        try {
            if($this->deleteBase64RequestedFile($brand->logo) ){
                DB::beginTransaction();
                $this->brandrepositories->delete($brand->id);
                DB::commit();
                return response()->json([
                    'message' => $brand->name." deleted successfully"
                ], 202);
            }
            return response()->json([
                'message' => $brand->name." deleted failed"
            ], 404);
        } catch (\Throwable $th) {
            DB::rollback();
        }
    }
}
