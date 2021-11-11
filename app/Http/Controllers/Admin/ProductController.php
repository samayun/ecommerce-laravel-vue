<?php

namespace App\Http\Controllers\Admin;

use App\Contracts\ProductContract;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductAttributeResource;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Traits\UploadAble;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    use UploadAble;

    protected $productRepository;
    public function __construct(ProductContract $productRepository){
        $this->productRepository = $productRepository;
        $this->authorizeResource(Product::class, 'product');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $this->productRepository->withFilter($request);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $image      = $this->base64ToImage($request->image)['image'];
        $extension  = $this->base64ToImage($request->image)['extension'];

        $FileError = $this->setImageValidationError($extension,'image',['jpg','jpeg','png','svg']);

        if ($FileError) {
             return response()->json([
                'message' => $FileError['error'],
                'errors' => [
                    $FileError['feild'] => [ $FileError['error'] ]
                ]
            ], $FileError['status']);
        }
        $uploadedFile = $this->uploadBase64File($request->image , 'products/','public');
        $attributes = [
            'image' => $uploadedFile['name']
        ];
        $merged = array_merge($request->all(),$attributes);
        return $this->productRepository->create($merged);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return $this->productRepository->show($product->id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(ProductRequest $request, Product $product)
    {
        $url = env('APP_URL').'/storage/products/'.$product->image;
        if($request->image != $url){
            // DELETE OLD IMAGE FIRST
            $path = 'products/'.$product->image;
            if (Storage::disk('public')->exists($path)) {
                Storage::disk('public')->delete($path);
             }

            $image      = $this->base64ToImage($request->image)['image'];
            $extension  = $this->base64ToImage($request->image)['extension'];

            $FileError = $this->setImageValidationError($extension,'image',['jpg','jpeg','png','svg']);

            if ($FileError) {
                return response()->json([
                    'message' => $FileError['error'],
                    'errors' => [
                        $FileError['feild'] => [ $FileError['error'] ]
                    ]
                ], $FileError['status']);
            }
            $uploadedFile = $this->uploadBase64File($request->image , 'products/','public');
            $attributes = [
                'image' => $uploadedFile['name']
            ];
            $merged = array_merge($request->all(),$attributes);
            return $this->productRepository->update($merged,$request->id);
        }
        $attributes = [
            'image' => $product->image
        ];
        $merged = array_merge($request->all(),$attributes);
        return $this->productRepository->update($merged,$request->id);
    }
    public function getProductAttribute()
    {
        $productAttributes = ProductAttribute::all();
        return ProductAttributeResource::collection($productAttributes);
    }
    public function createProductAttribute(Request $request)
    {
        $this->validate($request , [
            'attribute_id' => 'required',
            'product_id'   => 'required',
            'quantity'     => 'required|numeric',
            'price'        => 'required'
        ]);
        $attribute = ProductAttribute::create($request->all());
        $product = Product::findOrFail($request->product_id);
        return response()->json(
            new ProductAttributeResource($attribute)
        , 201);
    }
    public function deleteProductAttribute($productAttributeId)
    {
        $productAttribute = ProductAttribute::find($productAttributeId);
        if ($productAttribute) {
            return $productAttribute->delete();
        }
        return response()->json([
            "error" => 'Atrribute Not Found'
        ], 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $deletedData = $this->productRepository->delete($product->id);
        $path = 'products/'.$product->image;
        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }
        return $deletedData;
    }

    public function bulk_delete(Request $request){
       $selected_item = $request->selected_data;
       return $this->productRepository->bulk_delete($selected_item);
    }
}
