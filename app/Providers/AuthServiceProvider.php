<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\Admin;
use App\Models\Attribute;
use App\Policies\BrandPolicy;
use App\Policies\CategoryPolicy;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Admin::class => [
            CategoryPolicy::class,
            BrandPolicy::class,
            Attribute::class,
        ]
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {

        Gate::define('super' , function(Admin $admin){
            return $admin->is_super == 1;
        });
        Gate::define('multi_delete' , function(Admin $admin){
            return $admin->is_super == 1;
        });
        $this->registerPolicies();
    }
}
