<?php

namespace App\Providers;

use App\Contracts\BrandContract;
use App\Contracts\ProductContract;
use App\Repositories\BrandRepository;
use App\Repositories\ProductRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $toBeBind = [
        BrandContract::class   => BrandRepository::class,
        ProductContract::class => ProductRepository::class
    ];
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        foreach ($this->toBeBind as $interface => $implementation) {
            $this->app->bind($interface,$implementation);
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
