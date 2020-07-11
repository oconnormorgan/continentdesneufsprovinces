<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleModel extends Model
{
    protected $fillable = [
        'role',
    ];

    public function user()
    {
        return $this->hasMany(User::class, 'role_id');
    }
}
