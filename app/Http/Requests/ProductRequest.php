<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'image' => 'required',
            'sku' => 'required',
            'price' => 'required',
            'description' => 'required',
            'slug' => !$this->slug ? 'nullable|unique:products,slug' : 'nullable|unique:products,slug,'.$this->id,
            'categories' => 'required',
            'brand_id' => 'required|exists:brands,id',
            'quantity' => 'required'
        ];
    }
}
