<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $casts = [
        'featured' => 'integer',
        'status' => 'integer'
    ];
    public function brand()
    {
        return $this->belongsTo('App\Models\Brand');
    }

    public function setNameAttribute($value){
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = \Str::slug($value);
    }
    public function scopeSearch($query , $q)
    {
        if($q == null) return;
        return $query->where('name','LIKE', "%$q%")
                    ->orWhere('id','LIKE', "%$q%")
                    ->orWhere('created_at','LIKE', "%$q%");
    }
    public function scopeFilter($query,$request)
    {
        $perPage =  $request->has('perPage') ? (int)$request->query('perPage') : 10;
        $orderBy =  $request->has('orderBy') ? $request->query('orderBy') : 'created_at';
        $sortBy  =  $request->has('sortBy') ? $request->query('sortBy') : 'desc';
        $q       =  $request->has('q') ? $request->query('q') : '' ;

        return $query->search($q)->orderBy($orderBy , $sortBy)->paginate($perPage);
    }

}
