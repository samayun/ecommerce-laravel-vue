<?php

namespace Penguin\Bread;

use Illuminate\Support\ServiceProvider;
use Penguin\Bread\Commands\PenguinInstallCommand;

class BreadServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // $this->load(__DIR__.'/Commands');
        if ($this->app->runningInConsole()) {
            $this->commands([
                PenguinInstallCommand::class,
            ]);
        }
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
       info("BOOT FROM BreadServiceProvider");
    }
}
