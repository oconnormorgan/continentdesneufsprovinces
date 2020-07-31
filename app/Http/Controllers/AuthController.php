<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsersResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $login = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if (!Auth::attempt($login)) {
            return response(['message' => 'login invalide!' ]);
        }
        //
        $accessToken = Auth::user()->createToken('authToken')->accessToken; 
        return new UsersResource(Auth::user($accessToken), $accessToken);
    }

    public function register(Request $request) {
        $register = $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string',
            'id_role' => 'required|integer',
        ]);

        $addUser = new User();

        $addUser->name = $register['name'];
        $addUser->email = $register['email'];
        $addUser->password = $register['password'];
        $addUser->id_role = $register['id_role'];

        $addUser->save();

        Log::debug($register);

        return new UsersResource($addUser);
    }

    public function logout() {
        $accessToken = Auth::user()->token();

        $accessToken->revoke();

        return response('Vous êtes déconnecté', 200);
    }
}
