<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            "id" => $this->id,
            "name" =>$this->name,
            "slug" => $this->slug ? $this->slug: "none",
            "brand" => ['id' => $this->brand->id, 'name' => $this->brand->name , 'image' => url($this->brand->logo)],
            "sku" => $this->sku,
            "price" => $this->price,
            "description" => $this->description,
            "quantity" => $this->quantity,
            "featured" => $this->featured == 1 ? true : false,
            "status" => $this->status == 1 ,
            // 'categories' => CategoryResource::collection($this->categories),
            'categories' => $this->categories,
            'images' => ImageResource::collection($this->images),
            'attributes' => ProductAttributeResource::collection($this->attributes),
            "image" => $this->image ? Storage::url('products/'.$this->image) :  Storage::url('products/default.png'),
            "description" => $this->description,
            "created_at" => $this->created_at->diffForHumans(),
            "updated_at" => $this->updated_at->diffForHumans()
        ];
    }
}
