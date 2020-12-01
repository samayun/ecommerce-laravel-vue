<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Http\Resources\BrandResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Attribute;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAttribute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

use function PHPUnit\Framework\isNull;

class ProductController extends Controller
{
    public function products(Request $request)
    {
        if($request->all() == []){
            $products = Product::latest()->filter($request);
            return ProductResource::collection($products);
        }
        if ($request->filter) {
            if ($request->filter == 'low_high') {
                $products =  Product::orderBy('price', 'asc')->paginate();
            }
            if ($request->filter == 'high_low') {
                $products =  Product::orderBy('price', 'desc')->paginate();
            }
            return ProductResource::collection($products);
        }

        $products = Product::multipleFilter($request)->filter($request);
        return ProductResource::collection($products);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function categoryProducts(Request $request , $categorySlug)
    {

        // return Cache::remember('singleCategory.'.$categorySlug.$request->filter, now()->addMinutes(120), function () use ($categorySlug, $request) {
            return Category::with(['products' => function ($q) use ($request) {
                $q->priceFilter($request);
            }])->withCount('products')->with('category')->where('slug', $categorySlug)->firstOrFail();
        // });
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function categories()
    {
        return Cache::remember('categoriesSubcategories', now()->addMinutes(120), function () {
            return CategoryResource::collection(Category::where('parent_id', 1)->withCount('products')->with('products')->where('id', '!=', 1)->with('subcategories')->latest()->get());
        });
    }

    public function attributes()
    {
        return Cache::remember('attributes', now()->addMinutes(120), function () {
            $sizesWithCountProduct = Attribute::whereNotNull('parent_id')->whereHas('value', function ($q) {
                $q->where('slug', 'size');
            })->withCount('products')->get();

            $coloursWithCountProduct = Attribute::whereNotNull('parent_id')->whereHas('value', function ($q) {
                $q->where('slug', 'color');
            })->withCount('products')->get();
            return response()->json([
                'sizes' => $sizesWithCountProduct,
                'colours' => $coloursWithCountProduct
            ], 200);
        });
    }
    public function sizes()
    {
        return Attribute::whereNotNull('parent_id')->whereHas('value', function ($q) {
            $q->where('slug', 'size');
        })->withCount('products')->get();
    }
    public function colours()
    {
        return Attribute::whereNotNull('parent_id')->whereHas('value', function ($q) {
            $q->where('slug', 'color');
        })->withCount('products')->get();
    }

    public function ShopByBrands()
    {
        return Brand::withCount('products')->latest()->get();

        // return Cache::remember('ShopByBrands', now()->addMinutes(120),function (){
        //     return Brand::latest()->get();
        // });
    }
    public function SingleBrand(Request $request, $slug)
    {
    return Cache::remember('brand.'.$slug.".".$request->filter.$request->page, now()->addMinute(60), function () use($slug,$request) {
            $brandProducts = Brand::where('slug', $slug)
                ->with(['products' => function ($q) use ($request) {
                    $q->priceFilter($request);
                    $q->paginate();
                }])
                ->firstOrFail();
            return new BrandResource($brandProducts);
          });
    }
    public function index()
    {
        return Cache::remember('categories', now()->addMinutes(120), function () {
            return CategoryResource::collection(Category::where('id', '!=', 1)->take(6)->get());
        });
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $product = Product::where('slug', $slug)->firstOrFail();
        $KEY = 'product.' . $slug;
        if ($product) {
            return Cache::remember($KEY, now()->addMinutes(120), function () use ($product) {
                return new ProductResource($product);
            });
        }
    }

}
