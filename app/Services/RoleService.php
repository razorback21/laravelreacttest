<?php

namespace App\Services;

use App\Models\Role;

class RoleService
{
    public function getRoleOptions()
    {
        return Role::all()->map(function ($role) {
            return [
                'value' => $role->id,
                'label' => $role->name,
            ];
        })->values();
    }
}
