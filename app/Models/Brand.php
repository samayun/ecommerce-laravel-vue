<?php

namespace App\Models;

use GuzzleHttp\Psr7\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    // use HasFactory;
    protected $guarded = [];

    public function scopeSearch($query,$q)
    {
        if($q == null) return $query;
        return $query->where('name','LIKE', "%$q%")
                    ->orWhere('id','LIKE', "%$q%")
                    ->orWhere('created_at','LIKE', "%$q%");
                    // ->orWhere('logo','LIKE', "%$q%");
    }
    public function setNameAttribute($v){
        $this->attributes['name'] = $v;
        $this->attributes['slug'] = \Str::slug($v);
    }
    public function scopeFilter( $query,$request)
    {
        $perPage =  $request->has('perPage') ? (int)$request->query('perPage') : 10;
        $orderBy =  $request->has('orderBy') ? $request->query('orderBy') : 'created_at';
        $sortBy  =  $request->has('sortBy') ? $request->query('sortBy') : 'desc';
        $q       =  $request->has('q') ? $request->query('q') : '' ;

        return $query->search($q)->orderBy($orderBy , $sortBy)->paginate($perPage);
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

}
