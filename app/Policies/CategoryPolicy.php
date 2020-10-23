<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    public function before($admin, $ability)
    {
        if ($admin->is_super == 1) {
            return true;
        }
    }
    /**
     * Determine whether the Admin can view any models.
     *
     * @param  \App\Models\Admin  $admin
     * @return mixed
     */
    public function viewAny(Admin $admin)
    {
       return true;
    }

    /**
     * Determine whether the Admin can view the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function view(Admin $admin, Category $category)
    {
        return true;
    }

    /**
     * Determine whether the Admin can create models.
     *
     * @param  \App\Models\Admin  $admin
     * @return mixed
     */
    public function create(Admin $admin)
    {
      return $admin->is_super == 1;
    }

    /**
     * Determine whether the Admin can update the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function update(Admin $admin, Category $category)
    {
        return $admin->is_super == 1 || $admin->is_super == 0;
    }

    /**
     * Determine whether the Admin can delete the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function delete(Admin $admin, Category $category)
    {
        return $admin->is_super == 1;
    }
    public function multiDelete(Admin $admin, Category $category)
    {
        return $admin->is_super == 1;
    }
    /**
     * Determine whether the Admin can restore the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function restore(Admin $admin, Category $category)
    {
        return $admin->is_super == 1;
    }

    /**
     * Determine whether the Admin can permanently delete the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Category  $category
     * @return mixed
     */
    public function forceDelete(Admin $admin, Category $category)
    {
        return $admin->is_super == 1;
    }
}
