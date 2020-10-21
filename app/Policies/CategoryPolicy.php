<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the Admin can view any models.
     *
     * @param  \App\Models\Admin  $Admin
     * @return mixed
     */
    public function viewAny(Admin $admin)
    {
       return true;
    }

    /**
     * Determine whether the Admin can view the model.
     *
     * @param  \App\Models\Admin  $Admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function view(Admin $Admin, Category $category)
    {
        return true;
    }

    /**
     * Determine whether the Admin can create models.
     *
     * @param  \App\Models\Admin  $Admin
     * @return mixed
     */
    public function create(Admin $admin)
    {
       return $admin->is_super == 0 || $admin->is_super == 1;
    }

    /**
     * Determine whether the Admin can update the model.
     *
     * @param  \App\Models\Admin  $Admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function update(Admin $Admin, Category $category)
    {
        //
    }

    /**
     * Determine whether the Admin can delete the model.
     *
     * @param  \App\Models\Admin  $Admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function delete(Admin $Admin, Category $category)
    {
        //
    }

    /**
     * Determine whether the Admin can restore the model.
     *
     * @param  \App\Models\Admin  $Admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function restore(Admin $Admin, Category $category)
    {
        //
    }

    /**
     * Determine whether the Admin can permanently delete the model.
     *
     * @param  \App\Models\Admin  $Admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function forceDelete(Admin $Admin, Category $category)
    {
        //
    }
}
