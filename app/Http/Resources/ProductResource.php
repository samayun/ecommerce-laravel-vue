<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            "created_at" => $this->created_at->diffForHumans(),
            "updated_at" => $this->updated_at->diffForHumans()
        ];
    }
}
