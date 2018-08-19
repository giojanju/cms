<?php

use Illuminate\Http\Request;

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

Route::namespace('Api')->group(function () {
	Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');

    Route::group(['middleware' => ['jwt.verify']], function() {
        Route::get('user', 'AuthController@getAuthenticatedUser');
    });

    Route::prefix('posts')->name('posts.')->group(function() {
        Route::post('/', 'PostController@json')->name('index');
        Route::post('create', 'PostController@create')->name('create');
    });
});
