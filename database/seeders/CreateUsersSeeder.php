<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\Admin;
use App\Models\User;

class CreateUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::create([
            'name'=>'Admin BoSs',
            'email'=>'samayunmc99@gmail.com',
            'is_super' => 0,
            'password'=> \Hash::make('123456'),
        ]);

        Admin::create([
            'name'=> 'Heath Ledger',
            'email'=>'admin@admin.com',
            'is_super' => 1,
            'password'=> \Hash::make('123456'),
        ]);
        Admin::create([
            'name'=>'Samayun Chowdhury ',
            'email'=>'samayun.m.chowdhury@gmail.com',
            'is_super' => 1,
            'password'=> \Hash::make('123456'),
        ]);
        
        User::create([
            'name'=>'Christian Bale',
            'email'=>'user@user.com',
            'status' => 'created',
            'password'=> \Hash::make('123456')
        ]);
    }
}
