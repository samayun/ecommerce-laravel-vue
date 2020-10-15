<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('content');
});

Route::get('/user-login', function () {
    return view('user_login');
})->name('login');

Route::get('/admin', function () {
    return view('admin_layout');
})->middleware('auth:admin');

Route::view('/{any}', 'admin_layout');

Route::get('/login/admin', [App\Http\Controllers\AdminController::class, 'getLoginForm'])->name('getAdminLogin');

Route::post('/login/admin', [App\Http\Controllers\AdminController::class, 'login'])->name('adminLogin');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');