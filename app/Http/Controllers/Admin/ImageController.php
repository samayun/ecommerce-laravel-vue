<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Image;
use App\Models\Product;
use App\Traits\UploadAble;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{

    use UploadAble;

    public function index()
    {
        return Image::latest()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->images[0];
        $this->validate($request,[
            'images' => 'required',
            'productId' => 'required'
        ]);

        $product = Product::find($request->productId);
        // $images = collect($request->images);
        foreach ($request->images as $encoded_data) {
                $newImage   = $this->base64ToImage($encoded_data)['image'];
                $extension  = $this->base64ToImage($encoded_data)['extension'];

                $uploadedFile = $this->uploadBase64File($encoded_data , 'images/','public');

                $product->images()->create([
                    'image' => $uploadedFile['name']
                ]);
        }
        return response()->json(
            new ProductResource($product), 201
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        return $image;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
         return $image->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        if($this->deleteOne($image->image, "images/")){
            return $image->delete();
        };

        // return $image->delete();
    }
}
