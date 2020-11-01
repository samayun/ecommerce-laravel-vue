<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Traits\UploadAble;
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
    public function index(Request $request)
    {

        // these code must be efactored - we wil need this again and again
        return Brand::filter($request);

        // Cache Repository Pattern
        // withFilter
        // rsponse
    }


     public function store(Request $request)
    {
        $this->validate($request , [
            'name' => 'bail|required|min:3"unique:brands,slug',
            'logo' => 'required'
        ]);

        $image      = $this->base64ToImage($request->logo)['data'];
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



        $uploadedFile = $this->uploadBase64File($request->logo , 'uploads/brands/','public');

        return Brand::create([
            'name' => $request->name,
            'logo' => '/storage/uploads/brands/'.$uploadedFile['name']
        ]);
    }



    public function storeViaBase(Request $request)
    {
        $this->validate($request , [
            'name' => 'bail|required|min:3',
            'logo' => 'required'
        ]);
        $strpos = strpos($request->logo,';');
        $substr = substr($request->logo,0,$strpos);
        $extension = explode('/', $substr)[1];

        $picName = time(). '.' . $extension;
        // Image::make();
        $path = Storage::move(public_path().'uploads/brands' , $request->logo);

        // return Storage::url($path);
        return Brand::create([
            'name' => $request->name,
            'logo' => $path
        ]);
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
        return $brand->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Brand $brand)
    {
        // try {
            // DB::beginTransaction();

            // $logo = preg_replace('/^/\/storage/\//',"",$brand->logo);
            // $this->deleteOne($logo);
            // WORKED FINE : IF INSERT : logo' => $uploadedFile['name'] 566.png
            // $path = "/uploads/brands/".$brand->logo;
            // if(Storage::delete($path)){
            //     $brand->delete();
            //     return response()->json([
            //     'message' => $brand->name." deleted successfully"
            // ], 200);
            // }
            $path = preg_replace("/storage/","", $brand->logo);

            if(Storage::delete($path)){
                    $brand->delete();
                    return response()->json([
                    'message' => $brand->name." deleted successfully"
                ], 202);
            }

            // $this->deleteFileFromServer($brand->logo,true);
            // return Storage::disk('public')->delete(public_path().'storage/uploads/brands/1604244861.png');

            // $brand->delete();
            // DB::commit();
            return response()->json([
                'message' => $brand->name." deleted failed"
            ], 404);
        // } catch (\Throwable $th) {
            // DB::rollback();
        // }
    }
}
