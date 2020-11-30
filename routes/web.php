<?php

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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
require "admin.php";
Route::view('/admin/{r}', 'admin_layout')->where('r', '.*');
require "site.php";
Route::view('/test', 'test');

Route::get('/get', function (Request $request) {
    // return $request->session()->all();
    return session()->get("_token");
});
Route::get('/set', function (Request $request) {
    // return $request->session()->all();
    session()->regenerate("_token");
    return session()->get("_token");
});
Route::view('/{any}', 'site')->where('any','.*');

Route::view('/offline', 'offline');


// Route::view('/user-login', 'user_login')->name('login');


Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
