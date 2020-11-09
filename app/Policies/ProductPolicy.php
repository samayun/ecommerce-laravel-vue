<?php

namespace App\Policies;

use App\Models\Product;
use App\Models\Admin;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy
{
    use HandlesAuthorization;
    public function before($admin, $ability)
    {
        if ($admin->is_super == 1) {
            return true;
        }
    }

    public function viewAny(Admin $admin)
    {
       return true;
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Brand  $brand
     * @return mixed
     */
    public function view(Admin $admin, Product $product)
    {
        return true;
    }

    public function create(Admin $admin)
    {
        return $admin->is_super == 1;
    }

    /**
     * Determine whether the admin can update the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Product  $product
     * @return mixed
     */
    public function update(Admin $admin, Product $product)
    {
        return $admin->is_super == 1 || $admin->is_super == 0;
    }

    /**
     * Determine whether the admin can delete the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Product  $product
     * @return mixed
     */
    public function delete(Admin $admin, Product $product)
    {
        return $admin->is_super == 1;
    }

}
