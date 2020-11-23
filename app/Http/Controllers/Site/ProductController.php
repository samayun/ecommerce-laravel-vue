<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    public function products(Request $request)
    {
      $products = Product::multipleFilter($request)->paginate(5);
       return ProductResource::collection($products);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function categoryProducts($categorySlug)
    {
        return Cache::remember('singleCategoryProducts.'.$categorySlug, now()->addMinutes(120),function () use($categorySlug)
        {
          return Category::with('products')->with('category')->where('slug' ,$categorySlug)->firstOrFail();
        });
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function categories()
    {
        return Cache::remember('categoriesSubcategories', now()->addMinutes(120),function ()
        {
            return CategoryResource::collection(Category::where('parent_id',1)->with('products')->where('id','!=',1)->with('subcategories')->latest()->get());
        });
    }
    public function ShopByBrands()
    {
        return Brand::latest()->get();

        // return Cache::remember('ShopByBrands', now()->addMinutes(120),function (){
        //     return Brand::latest()->get();
        // });
    }
    public function SingleBrand(Request $request, $slug)
    {

    //   return Cache::remember('brand.'.$slug, now()->addMinute(60), function () use($slug) {
        return Brand::where('slug',$slug)->with(['products' => function($q) use($request){
            $q->filter($request);
        }])->withCount('products')->firstOrFail();
    //   });
    }
    public function index()
    {
        return Cache::remember('categories', now()->addMinutes(120),function ()
        {
            return CategoryResource::collection(Category::where('id','!=',1)->take(6)->get());
        });
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $product = Product::where('slug' ,$slug)->firstOrFail();
        $KEY = 'product.'.$slug;
        if($product){
            return Cache::remember($KEY, now()->addMinutes(120), function () use($product) {
                return new ProductResource($product);
            });
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
