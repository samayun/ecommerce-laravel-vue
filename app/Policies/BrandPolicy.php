<?php

namespace App\Policies;

use App\Models\Admin;
use App\Models\Brand;
use Illuminate\Auth\Access\HandlesAuthorization;

class BrandPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\Admin  $admin
     * @return mixed
     */
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
    public function view(Admin $admin, Brand $brand)
    {
        return true;
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\Admin  $admin
     * @return mixed
     */
    public function create(Admin $admin)
    {
        return $admin->is_super == 1;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Brand  $brand
     * @return mixed
     */
    public function update(Admin $admin, Brand $brand)
    {
        return $admin->is_super == 1 || $admin->is_super == 0;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Brand  $brand
     * @return mixed
     */
    public function delete(Admin $admin, Brand $brand)
    {
        return $admin->is_super == 1;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Brand  $brand
     * @return mixed
     */
    public function restore(Admin $admin, Brand $brand)
    {
        return $admin->is_super == 1 || $admin->is_super == 0;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Brand  $brand
     * @return mixed
     */
    public function forceDelete(Admin $admin, Brand $brand)
    {
        return $admin->is_super == 1;
    }
}
