<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;

class CreateAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'name'=>'Samayun Chowdhury ',
            'email'=>'samayun.m.chowdhury@gmail.com',
            'is_super' => 1,
            'password'=> \Hash::make('123456'),
        ]);

        Admin::create([
            'name'=>'Admin BoSs',
            'email'=>'samayunmc99@gmail.com',
            'is_super' => 0,
            'password'=> \Hash::make('123456'),
        ]);
    }
}
