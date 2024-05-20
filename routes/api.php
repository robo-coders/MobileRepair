<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ApplicationController;
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

Route::post('/customer/login', [AuthenticationController::class, 'login']);
Route::post('/customer/register', [AuthenticationController::class, 'register']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/customer/dashboard', [ApplicationController::class, 'dashboard']);
    Route::post('/customer/orders', [ApplicationController::class, 'getOrders']);
    Route::post('/customer/orders-details/{id}', [ApplicationController::class, 'getOrderDetails']);
    Route::post('/fetch-brands', [ApplicationController::class, 'fetchBrands']);
    Route::post('/fetch-products/{brand_id}', [ApplicationController::class, 'fetchBrandProducts']);
    Route::post('/fetch-product-parts/{product_id}', [ApplicationController::class, 'fetchProductParts']);
});