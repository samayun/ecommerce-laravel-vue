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
            'name'=>'Admin ',
            'email'=>'samayun.m.chowdhury@gmail.com',
            'is_super' => 1,
            'password'=> bcrypt('123456'),
        ]);

        Admin::create([
            'name'=>'Admin ',
            'email'=>'samayun.m.chowdhury@gmail.comm',
            'is_super' => 0,
            'password'=> bcrypt('123456'),
        ]);
    }
}
