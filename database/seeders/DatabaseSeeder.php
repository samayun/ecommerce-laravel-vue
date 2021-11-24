<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(CreateVariantSeeder::class);
        $this->call(CreateUsersSeeder::class);
        // Category::factory(20)->create();
        // Brand::factory(10)->create();
        // Product::factory(20)->create();
    }
}
