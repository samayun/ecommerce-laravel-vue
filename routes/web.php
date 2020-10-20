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

Route::view('/', 'content');
Route::view('/user-login', 'user_login')->name('login');

// Route::any('{any}', function () {
//     return view('admin_layout');
// });

Route::view('/{any}/{anyTwo}', 'admin_layout');
Route::view('/{any}', 'admin_layout');

// Route::any('/admin', function () {
//     return view('admin_layout');
// });

Route::group(['prefix' => 'api/admin' , 'middleware' => 'isAdmin' ], function () {
    Route::resource('categories' , App\Http\Controllers\Admin\CategoryController::class);
    
});



Route::post('/api/login/admin', [App\Http\Controllers\AdminController::class, 'login'])->name('adminLogin');

// Route::get('/login/admin', [App\Http\Controllers\AdminController::class, 'getLoginForm'])->name('getAdminLogin');
Route::post('/api/logout/admin', [App\Http\Controllers\Admin\LoginController::class, 'logout'])->name('adminLogout');


// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');