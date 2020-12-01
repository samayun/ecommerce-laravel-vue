<?php

use App\Http\Controllers\Site\CartController;
use App\Http\Controllers\Site\CompareController;
use App\Http\Controllers\Site\ProductController;
use App\Http\Controllers\Site\WishlistController;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;

// Route::get('/product/{slug}', function ($slug){
//     $product = Product::where('slug' ,$slug)->firstOrFail();
//     $product = Product::where('slug' ,$slug)->firstOrFail();
//     $KEY = 'product.'.$slug;
//     if($product){
//         $product= Cache::remember($KEY, now()->addMinutes(120), function () use($product) {
//             return new ProductResource($product);
//         });
//     }
//     return view('test',[ 'product' =>  new ProductResource($product) ]);
// });

Route::view('test', 'test');
Route::group(['prefix' => 'api'], function () {

    Route::delete('cart/destroy' , [CartController::class, 'clearWholeItems']);
    Route::apiResource('cart' , CartController::class);

    Route::delete('compare/destroy' , [CompareController::class, 'clearWholeItems']);
    Route::apiResource('compare' , CompareController::class);

    Route::delete('wishlist/destroy' , [WishlistController::class, 'clearWholeItems']);
    Route::apiResource('wishlist' , WishlistController::class);

    Route::get('/attributes',  [ProductController::class, 'attributes']);
    Route::get('/sizes',  [ProductController::class, 'sizes']);
    Route::get('/colours',  [ProductController::class, 'colours']);

    Route::get('/products',  [ProductController::class, 'products']);

    Route::get('/product/{slug}',  [ProductController::class, 'show']);

    Route::get('/brands',  [ProductController::class, 'ShopByBrands']);
    Route::get('/brands/{slug}',  [ProductController::class, 'SingleBrand']);

    Route::get('/categories',  [ProductController::class, 'index']);
    // categories with subcategories
    Route::get('/categoriesSubcategories',  [ProductController::class, 'categories']);
    //   categories with subcategories
    Route::get('/category/{categorySlug}',  [ProductController::class, 'categoryProducts']); // category products
    // Route::resource('product', [ProductController::class]);

});
