<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'icon' => $this->icon ? url($this->icon) :  Storage::url('categories/default.png'),
            'subcategories' => count($this->subcategories) > 0 ? $this->subcategories : [],
            'products' => $this->products,
            'products_count' => count($this->products)

        ];
    }
}
