<?php


use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

// use Melihovv\ShoppingCart\Facades\ShoppingCart as Cart;

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

Route::get('/set', function (Request $request) {
    // return Cart::content();
    $id            = $request->id;
    $name          = $request->name;
    $price         = $request->price;
    $qty           = $request->qty;
    $image         = $request->image;
    $weight        = $request->has('weight') ? $request->weight : 0;

    $options = collect( [] );
    if($request->has('image')){
        $options = $options->merge(['image' => $request->image]);
    }
    if($request->has('size')){
        $options = $options->merge(['size' => $request->size]);
    }
    if($request->has('colour')){
        $options = $options->merge(['colour' => $request->colour]);
   }
   $requests = collect($request->only('id','name','price','weight'));
   $addData  = $requests->merge([['options' => $options]]);

   $add = Cart::instance('wishlist')->add(
       [
        'id' => $id,
        'name' => $name ,
        'qty' => $qty,
        'price' => $price,
        'weight' => $weight ,
        'options' => [$options]
       ]
   );

//    $add = Cart::add($id, $name , $qty, $price, $weight , [$options]);
//    $add = Cart::get($add->rowId);
   if(Cart::instance('wishlist')->content()->has($add->rowId)){
        $wislists   = Cart::instance('wishlist')->content();
        $subtotal =  Cart::instance('wishlist')->subtotal();
        $tax =  Cart::instance('wishlist')->tax();
        $total =  Cart::instance('wishlist')->total();
        $count =  Cart::instance('wishlist')->content()->count();
        return response()->json(
            compact('wislists','subtotal','tax','total','count')
            , 200);
   }
});

Route::get('/get', function () {
    $wislists   = Cart::instance('wishlist')->content();
    $subtotal =  Cart::instance('wishlist')->subtotal();
    $tax =  Cart::instance('wishlist')->tax();
    $total =  Cart::instance('wishlist')->total();
    $count =  Cart::instance('wishlist')->content()->count();
    return response()->json(
        compact('wislists','subtotal','tax','total','count')
        , 200);
});

Route::view('/{any}', 'site')->where('any','.*');

Route::view('/offline', 'offline');


// Route::view('/user-login', 'user_login')->name('login');


Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
