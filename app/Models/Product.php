<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Expr\Cast\Array_;
use Str;
use Gloudemans\Shoppingcart\Contracts\Buyable;

class Product extends Model implements Buyable
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
    public function categories()
    {
        return $this->morphToMany('App\Models\Category', 'categoryable');
    }

    public function images()
    {
        return $this->morphMany('App\Models\Image', 'imageable');
    }
    public function attributes()
    {
        return $this->hasMany('App\Models\ProductAttribute');
    }

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
    public function scopeSearch($query, $q)
    {
        if ($q == null) return;
        return $query->where('name', 'LIKE', "%$q%")
            ->orWhere('id', 'LIKE', "%$q%")
            ->orWhere('created_at', 'LIKE', "%$q%");
    }
    public function scopeMultipleFilter($query, $request)
    {
        $categories = preg_replace("/^\[|]/", "", $request->categories);
        $brands   = preg_replace("/^\[|]/", "", $request->brands);
        $sizes    = preg_replace("/^\[|]/", "", $request->sizes);
        $colours    = preg_replace("/^\[|]/", "", $request->colours);
        $prices   = explode('-', $request->input('prices'));

        return
            $query
            ->when($brands != "", function ($query) use ($brands) {
                $query->where('brand_id', [$brands]);
            })
            ->when($categories != "", function ($query) use ($categories) {
                $query->whereHas('categories', function ($q) use ($categories) {
                    $q->whereIn('category_id', [$categories]);
                });
            })
            ->when($request->has('sizes'), function ($query) use ($sizes) {
                $query->whereHas('attributes', function ($q) use ($sizes) {
                    //  $q->whereIn('attribute_id', $sizes);
                    $q->whereHas('attribute', function ($q) use ($sizes) {
                        // dd([$sizes]);
                        $q->whereIn('slug', [$sizes]);
                    });
                });
            })
            ->when($request->has('colours'), function ($query) use ($colours) {
                $query->whereHas('attributes', function ($q) use ($colours) {
                    //  $q->whereIn('attribute_id', $sizes);
                    $q->whereHas('attribute', function ($q) use ($colours) {
                        // dd([$sizes]);
                        $q->whereIn('slug', [$colours]);
                    });
                });
            })
            ->when($request->has('prices'), function ($query) use ($prices) {
                $start = $prices[0];
                $end = $prices[1];
                $query->orWhereBetween('price', [$start, $end]);
            });
    }

    public function scopePrevMultipleFilter($query, $request)
    {
        $categories = explode(',', $request->categories);
        $brands     = explode(',', $request->brands);
        $sizes      = explode(',', $request->sizes);
        $prices     = explode('-', $request->input('prices'));


        return
            $query
            ->when(count($brands), function ($query) use ($brands) {
                $query->whereIn('brand_id', $brands);
            })
            ->when(count($categories), function ($query) use ($categories) {
                $query->orWhereHas('categories', function ($q) use ($categories) {
                    $q->whereIn('category_id', $categories);
                });
            })
            ->when($request->has('sizes'), function ($query) use ($sizes) {
                $query->orWhereHas('attributes', function ($q) use ($sizes) {
                    //  $q->whereIn('attribute_id', $sizes);
                    $q->whereHas('attribute', function ($q) use ($sizes) {
                        // dd($sizes);
                        $q->whereIn('slug', $sizes);
                    });
                });
            })
            ->when($request->has('prices'), function ($query) use ($prices) {
                $start = $prices[0];
                $end = $prices[1];
                $query->orWhereBetween('price', [$start, $end]);
            });
    }

    public function scopeFilter($query, $request)
    {
        $perPage =  $request->has('perPage') ? (int)$request->query('perPage') : 10;
        $orderBy =  $request->has('orderBy') ? $request->query('orderBy') : 'created_at';
        $sortBy  =  $request->has('sortBy') ? $request->query('sortBy') : 'desc';
        $q       =  $request->has('q') ? $request->query('q') : '';

        return $query->search($q)->orderBy($orderBy, $sortBy)->paginate($perPage);
    }

    public function scopePriceFilter($query, $request)
    {
        $filter =  $request->has('filter');
        if ($filter && $request->filter == "low_high") {
            return $query->orderBy('price', 'asc');
        }
        if ($filter && $request->filter == "high_low") {
            return $query->orderBy('price', 'desc');
        }
    }


    public function getBuyableIdentifier($options = null) {
        return $this->id;
    }
    public function getBuyableDescription($options = null) {
        return $this->name;
    }
    public function getBuyablePrice($options = null) {
        return $this->price;
    }
    public function getBuyableWeight($options = null) {
        return $this->weight;
    }
}
