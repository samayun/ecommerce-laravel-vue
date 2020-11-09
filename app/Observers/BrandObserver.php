<?php

namespace App\Observers;

use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class BrandObserver
{
    protected $CACHE_KEY = 'brands';
    /**
     * Handle the brand "created" event.
     *
     * @param  \App\Models\Brand  $brand
     * @return void
     */
    public function created(Brand $brand )
    {
       info('create::observe() '. $this->CACHE_KEY);
       $this->flush($this->CACHE_KEY);
    }
    private function flush($key)
    {
        if(cache()->has($key)){
            return cache()->forget($key);
        }
    }

    /**
     * Handle the brand "updated" event.
     *
     * @param  \App\Models\Brand  $brand
     * @return void
     */
    public function updated(Brand $brand)
    {
        $this->flush($this->CACHE_KEY);
    }

    /**
     * Handle the brand "deleted" event.
     *
     * @param  \App\Models\Brand  $brand
     * @return void
     */
    public function deleted(Brand $brand)
    {
        $this->flush($this->CACHE_KEY);
    }

}
