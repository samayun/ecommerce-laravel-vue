<?php

use App\Events\AdminLoginAlert;
use App\Http\Controllers\Admin\BrandController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Jobs\SendEmailJobs;
use App\Mail\AdminAlertMail;
use App\Models\Brand;
use App\Notifications\AdminLoginResponser;
use Carbon\Carbon;
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

Route::view('/', 'content');
Route::view('/user-login', 'user_login')->name('login');

// Route::any('{any}', function () {
//     return view('admin_layout');
// });


Route::view('/{any}', 'admin_layout')->where('any', 'admin.*');

// Route::any('/admin', function () {
//     return view('admin_layout');
// });

Route::group(['prefix' => 'api/admin' , 'middleware' => 'auth:admin' ], function () {
    Route::get('subcategories' , [CategoryController::class , 'subcategories']);
    Route::post('categories/multi' , [CategoryController::class , 'multiDelete']);
    Route::apiResource('categories' , CategoryController::class);
    Route::post('brands/multi' , [BrandController::class , 'multiDelete']);
    Route::apiResource('brands' , BrandController::class);
    Route::post('products/bulk_delete' , [ProductController::class , 'bulk_delete']);
    Route::apiResource('products' , ProductController::class);
});



Route::post('/api/login/admin', [App\Http\Controllers\AdminController::class, 'login'])->name('adminLogin');

// Route::get('/login/admin', [App\Http\Controllers\AdminController::class, 'getLoginForm'])->name('getAdminLogin');
Route::post('/api/logout/admin', [App\Http\Controllers\Admin\LoginController::class, 'logout'])->name('adminLogout');


// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
