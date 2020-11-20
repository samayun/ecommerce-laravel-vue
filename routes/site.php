<?php

use App\Http\Controllers\Site\ProductController;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::get('/product/{id}', function ($id){
	$product = Product::findOrFail($id);
    return view('product',[ 'product' =>  new ProductResource($product) ]);
});


Route::group(['prefix' => 'api'], function () {
    Route::get('/categories',  [ProductController::class, 'index']);
    // categories with subcategories
    Route::get('/categoriesSubcategories',  [ProductController::class, 'categories']);
    //   categories with subcategories
    Route::get('/category/{categorySlug}',  [ProductController::class, 'categoryProducts']); // category products
    // Route::resource('product', [ProductController::class]);

});
