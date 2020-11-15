<?php

use App\Events\AdminLoginAlert;
use App\Http\Controllers\Admin\BrandController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\AttributeController;
use App\Http\Controllers\Admin\ImageController;
use App\Jobs\SendEmailJobs;
use App\Mail\AdminAlertMail;
use App\Models\Brand;
use App\Models\Product;
use App\Notifications\AdminLoginResponser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'api/admin' , 'middleware' => 'auth:admin' ], function () {
    Route::get('subcategories' , [CategoryController::class , 'subcategories']);
    Route::get('all_categories' , [CategoryController::class , 'all_categories']);

    Route::post('categories/multi' , [CategoryController::class , 'multiDelete']);
    Route::apiResource('categories' , CategoryController::class);

    Route::get('values' , [AttributeController::class , 'values']);
    Route::post('attributes/multi' , [AttributeController::class , 'multiDelete']);
    Route::apiResource('attributes' , AttributeController::class);

    Route::post('brands/multi' , [BrandController::class , 'multiDelete']);
    Route::apiResource('brands' , BrandController::class);

    Route::get('product/attributes' , [ProductController::class , 'getProductAttribute']);
    Route::post('product/attributes' , [ProductController::class , 'createProductAttribute']);
    Route::delete('product/attributes/{id}' , [ProductController::class , 'deleteProductAttribute']);
    Route::apiResource('products' , ProductController::class);
    Route::apiResource('images' , ImageController::class);
});

Route::post('/api/login/admin', [App\Http\Controllers\AdminController::class, 'login'])->name('adminLogin');
Route::post('/api/logout/admin', [App\Http\Controllers\Admin\LoginController::class, 'logout'])->name('adminLogout');
