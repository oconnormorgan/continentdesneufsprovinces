<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

        return new UserResource(Auth::user($accessToken), $accessToken);
    }

    public function logout() {
        $accessToken = Auth::user()->token();

        $accessToken->revoke();

        return response('Vous êtes déconnecté', 200);
    }
}
