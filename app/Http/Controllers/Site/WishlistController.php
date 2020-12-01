<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\ShoppingCart;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class WishlistController extends Controller
{

    /**
     * Display  alll wish Iitem
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $wishlists   = Cart::instance('wishlist')->content();
        $subtotal =  Cart::instance('wishlist')->subtotal();
        $tax =  Cart::instance('wishlist')->tax();
        $total =  Cart::instance('wishlist')->total();
        $count =  Cart::instance('wishlist')->content()->count();
        return response()->json(
            compact('wishlists','subtotal','tax','total','count')
            , 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'id' => 'required',
            'name' => 'required',
            'qty' => 'required',
            'price' => 'required',
            'size' => $request->size ? 'required' : '',
            'colour' => $request->colour ? 'required' : '',
            'image' => $request->image ? 'required' : '',
        ]);

        // Cart::store('default'); // Store to DB (We'll add before Order)
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

        // $add = Cart::add(compact('id','name','qty','price','weight'),['options' => $options]);
        $add =  Cart::instance('wishlist')->add($id, $name , $qty, $price, $weight , [$options]);
        if(Cart::instance('wishlist')->content()->has($add->rowId)){
            return $this->index();
        }

        // return Cart::add($id, $name , $qty, $price, $weight , [$options]); // Mind It we didn't store it into Database
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ShoppingCart  $ShoppingCart
     * @return \Illuminate\Http\Response
     */
    public function show($rowId)
    {
        if(Cart::instance('wishlist')->content()->has($rowId)){
            return Cart::instance('wishlist')->get($rowId);
        }
        return response()->json("wishlist Not Found",404);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ShoppingCart  $ShoppingCart
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$rowId)
    {
        $request->validate([
            'qty' => 'required|numeric|min:1'
        ]);
        $edit =  Cart::instance('wishlist')->update($rowId,$request->qty);
        if(Cart::instance('wishlist')->content()->has($edit->rowId)){
            return $this->index();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ShoppingCart  $ShoppingCart
     * @return \Illuminate\Http\Response
     */
    public function destroy($rowId)
    {
        Cart::instance('wishlist')->remove($rowId);
        return $this->index();
    }
    public function clearWholeItems()
    {
        return Cart::instance('wishlist')->destroy();
    }

}
