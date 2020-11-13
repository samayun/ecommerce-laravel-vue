<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoryable extends Model
{
    protected $guarded = [];
    public $timestamps = false;
    // use HasFactory;
    public function categoryable()
    {
       return $this->morphToMany();
    }

}
