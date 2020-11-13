<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];
    // protected $casts = [
    //     'parent_id' =>'integer'
    // ];
    // protected $with = ['subcategories','category'];
    public function subcategories()
    {
        return $this->hasMany('App\Models\Category', 'parent_id');
    }
    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'parent_id');
    }
    public function products()
    {
        return $this->morphedByMany('App\Models\Product', 'categoryable');
    }

    public function setNameAttribute($v){
        $this->attributes['name'] = $v;
        $this->attributes['slug'] = \Str::slug($v);
    }
    public function scopeSearch($query , $q)
    {
        if($q == null) return;
        return $query->where('name','LIKE', "%$q%")
                    ->orWhere('id','LIKE', "%$q%")
                    ->orWhere('created_at','LIKE', "%$q%")
                    ->orWhere('icon','LIKE', "%$q%");
    }

    public function scopeFilter( $query,$request)
    {
        $perPage =  $request->has('perPage') ? (int)$request->query('perPage') : 10;
        $orderBy =  $request->has('orderBy') ? $request->query('orderBy') : 'created_at';
        $sortBy  =  $request->has('sortBy') ? $request->query('sortBy') : 'desc';
        $q       =  $request->has('q') ? $request->query('q') : '' ;

        return $query->search($q)->orderBy($orderBy , $sortBy)->paginate($perPage);
    }
}
