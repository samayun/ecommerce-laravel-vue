<?php

namespace App\Providers;

use App\Models\Brand;
use App\Models\Product;
use App\Observers\BrandObserver;
use App\Observers\ProductObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Brand::observe(BrandObserver::class);
        Product::observe(ProductObserver::class);
    }
}
