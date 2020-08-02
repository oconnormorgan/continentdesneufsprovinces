<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', 'DashboardController@getUsers');

Route::get('/textes', 'TextesController@index');

Route::post('/texte/create', 'TextesController@store');
Route::post('/texte/chapitre', 'TextesController@createChapitre');
Route::post('/texte/edit', 'TextesController@edit');
Route::post('/texte/chapitre/edit', 'TextesController@editChapitre');

Route::delete('/texte/{id}', 'TextesController@delete')->where('id', "[0-9]+");
Route::delete('/texte/chapitre/{id}', 'TextesController@deleteChapitre')->where('id', "[0-9]+");

Route::get('/{id}/chapitre', 'TextesController@getChapitre')->where('id', "[0-9]+");

Route::get('/{id}/texte', 'TextesController@getTexteChapitre')->where('id', "[0-9]+");

Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::get('/logout', 'AuthController@logout');