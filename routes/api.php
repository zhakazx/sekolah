<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BeritaController;

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

Route::group([
    'middleware' => 'api',
], function ($router) {
    Route::post('auth/login', [AuthController::class, 'login']);
    Route::post('auth/logout', [AuthController::class, 'logout']);
    Route::post('auth/refresh', [AuthController::class, 'refresh']);
    Route::get('auth/user-profile', [AuthController::class, 'userProfile']);

    Route::apiResource('berita', BeritaController::class);
});
