<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function values()
    {
        return $this->hasMany('App\Models\Attribute', 'parent_id');
    }
    public function value()
    {
        return $this->belongsTo('App\Models\Attribute', 'parent_id');
    }
    public function products()
    {
        return $this->hasMany('App\Models\ProductAttribute');
    }

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = \Str::slug($value);
    }
    // public function getRouteKeyName()
    // {
    //     return 'slug';
    // }
}
