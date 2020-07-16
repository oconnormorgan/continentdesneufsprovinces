<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersResource;
use App\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getUsers() {
        $users = User::all();
        return UsersResource::collection($users);
    }
}
