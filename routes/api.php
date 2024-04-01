<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthenticationController;

/*
|--------------------------------------------------------------------------
| Web + Mobile App APIs
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/customer/check', [AuthenticationController::class, 'check']);
Route::post('/customer/login', [AuthenticationController::class, 'login']);
Route::post('/customer/register', [AuthenticationController::class, 'register']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


