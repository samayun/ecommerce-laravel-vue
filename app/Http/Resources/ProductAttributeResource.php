<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductAttributeResource extends JsonResource
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
            "attribute_id" => $this->attribute_id,
            "price" => $this->price,
            "quantity" => $this->quantity,
            'type' => $this->attribute->value,
            'name' => $this->attribute->name,
            'slug' => $this->attribute->slug
        ];
    }
}
