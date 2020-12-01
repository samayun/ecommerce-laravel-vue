<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use App\Models\ShoppingCart;
use Gloudemans\Shoppingcart\Facades\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display  alll cart Iitem
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //   $carts   = Cart::instance('default')->restore(auth()->user()->email);
        $carts = Cart::content();
        $subtotal =  Cart::subtotal();
        $tax =  Cart::tax();
        $total =  Cart::total();
        $count =  Cart::content()->count();
        return response()->json(
            compact('carts','subtotal','tax','total','count')
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
        $add =  Cart::add($id, $name , $qty, $price, $weight , [$options]);
        if(Cart::content()->has($add->rowId)){
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
        if(Cart::content()->has($rowId)){
            return Cart::get($rowId);
        }
        return response()->json("Row Not Found",404);
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
        $edit =  Cart::update($rowId,$request->qty);
        if(Cart::content()->has($edit->rowId)){
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
        Cart::remove($rowId);
        return $this->index();
    }
    public function clearWholeItems()
    {
        return Cart::destroy();
    }

}
