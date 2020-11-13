<?php

namespace App\Policies;

use App\Models\Attribute;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AttributePolicy
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
     * @param  \App\Models\Attribute  $Attribute
     * @return mixed
     */
    public function view(Admin $admin, Attribute $Attribute)
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
     * @param  \App\Models\Attribute  $Attribute
     * @return mixed
     */
    public function update(Admin $admin, Attribute $Attribute)
    {
        return $admin->is_super == 1 || $admin->is_super == 0;
    }

    /**
     * Determine whether the Admin can delete the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Attribute  $Attribute
     * @return mixed
     */
    public function delete(Admin $admin, Attribute $Attribute)
    {
        return $admin->is_super == 1;
    }
    public function multiDelete(Admin $admin, Attribute $Attribute)
    {
        return $admin->is_super == 1;
    }
    /**
     * Determine whether the Admin can restore the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Attribute  $Attribute
     * @return mixed
     */
    public function restore(Admin $admin, Attribute $Attribute)
    {
        return $admin->is_super == 1;
    }

    /**
     * Determine whether the Admin can permanently delete the model.
     *
     * @param  \App\Models\Admin  $admin
     * @param  \App\Models\Attribute  $Attribute
     * @return mixed
     */
    public function forceDelete(Admin $admin, Attribute $Attribute)
    {
        return $admin->is_super == 1;
    }
}
