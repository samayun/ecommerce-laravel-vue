<?php

namespace App\Observers;

use App\Models\Product;

class ProductObserver
{
    protected $CACHE_KEY = 'products';
    private function flush($key)
    {
        if(cache()->has($key)){
            return cache()->forget($key);
        }
    }
    /**
     * Handle the product "created" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function created(Product $product)
    {
        $this->flush($this->CACHE_KEY);
    }

    /**
     * Handle the product "updated" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function updated(Product $product)
    {
        $this->CACHE_KEY = 'product.'.$product->id;
        $this->flush($this->CACHE_KEY);
    }

    /**
     * Handle the product "deleted" event.
     *
     * @param  \App\Models\Product  $product
     * @return void
     */
    public function deleted(Product $product)
    {
        $this->flush($this->CACHE_KEY);
    }

}
