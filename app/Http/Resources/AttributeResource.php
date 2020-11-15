<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;


class AttributeResource extends JsonResource
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
            "type" => $this->value?['id'=>$this->value->id,'name'=>$this->value->name,'slug'=>$this->value->slug]: "",
            "values" => $this->values
        ];
    }
}
