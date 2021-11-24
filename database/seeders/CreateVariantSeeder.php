<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Attribute;
use App\Models\Category;

class CreateVariantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Attribute::create(['name' => 'Color','slug' => 'color']);
        Attribute::create(['name' => 'Size','slug' => 'size']);

        Category::create([
            'id' => 1,
            'name' => 'Root',
            'slug' => 'root',
            'description' => 'This is root category . don\'t change this',
            'parent_id' => 1
        ]);

    }
}
