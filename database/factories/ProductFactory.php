<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 'category_id' => function ( ){
            //      return Category::all()->random();
            // },
            'brand_id' => function ( ){
                return Brand::all()->random();
             },
             'name' => $this->faker->name,
             'slug' => $this->faker->slug,
             'sku' => function ( ){
                return rand(1000,10000);
              },
            'price' => function ( ){
                 return rand(10,100);
               },
            // 'discount_price' => function ( ){
            //         return rand(10,100);
            // },
            'description' => $this->faker->paragraph,
            // 'image' =>  $this->faker->imageUrl($width = 640,$height = 400),
            // 'color' => $this->faker->hexcolor,
            // 'size' => function ( ){
            //     $colors = ['sm','md','lg'];
            //     return $colors[rand(0,2)];
            //  },
            // 'quantity' => function ( ){
            //     return rand(2,10);
            // },
        ];
    }
}
