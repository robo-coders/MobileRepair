<?php

use App\Http\Controllers\AgentApplicationController;
use App\Http\Controllers\AgentController;
use App\Http\Controllers\AgentOrdersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


use App\Http\Controllers\BrandController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Hash;

// Route::get('/send-welcome-email', [EmailController::class, 'sendWelcomeEmail']);
Route::get('/', function () {
    return Hash::make("admin@123");
});


Route::middleware(['auth', 'check-user-role'])->group(function () {

//AgentApplication
    Route::prefix('agent/status')->group(function () {
        Route::get('/{id}', [AgentApplicationController::class, 'agentStatus'])->name('agent.status');
        Route::get('/reject/application/reason/{id}', [AgentApplicationController::class, 'agentStatusToReject'])->name('agent.status.reject');
        Route::post('/approve/application/{id}', [AgentApplicationController::class, 'agentStatusToApprove'])->name('agent.status.approve');
    });

 //Agent
    Route::prefix('agent/applications')->group(function () {
        // Route::get('/list', [AgentController::class, 'applicationList'])->name('agent.application.list');
        Route::get('/', [AgentController::class, 'applications'])->name('agent.application');
        Route::get('/upload', [AgentController::class, 'upload'])->name('agent.application.upload');
        Route::post('/save', [AgentController::class, 'saveApplication'])->name('agent.application.save');
        Route::get('/approve/{id}', [AgentController::class, 'approveApplication'])->name('agent.application.approve');
    });

//Agent
    Route::prefix('agent/orders')->group(function () {
        Route::get('/', [AgentOrdersController::class, 'index'])->name('agent.orders.index');
        Route::get('/add', [AgentOrdersController::class, 'add'])->name('agent.orders.add');
        Route::post('/save', [AgentOrdersController::class, 'save'])->name('agent.orders.save');
    });
//Orders
    Route::prefix('orders')->group(function () {
        Route::get('/', [OrderController::class, 'index'])->name('orders.index');

    });
//Drivers
    Route::prefix('driver/orders')->group(function () {
        Route::get('/', [DriverController::class, 'index'])->name('driver.orders.index');
        Route::get('/pending', [DriverController::class, 'pendingOrders'])->name('driver.orders.pending');
        Route::get('/assign/me/{id}', [DriverController::class, 'assignToMyself'])->name('driver.orders.assignToMyself');
        Route::get('/assigned', [DriverController::class, 'myOrders'])->name('driver.orders.myOrders');

    });


    Route::get('/dashboard', function () {
        return Inertia::render('Welcome');
    });

    Route::get('/logout', function () {
        Auth::logout();
        return redirect("/login");
    });

    //Users
    Route::prefix('users')->group(function () {
        Route::get('/admin', [UserController::class, 'admin'])->name('admin');
        Route::get('/agent', [UserController::class, 'agent'])->name('agent');
        Route::get('/driver', [UserController::class, 'driver'])->name('driver');
        Route::get('/customer', [UserController::class, 'customer'])->name('customer');
        Route::get('/', [UserController::class, 'index'])->name('users');
        Route::get('/add', [UserController::class, 'add'])->name('users.add');
        Route::post('/save', [UserController::class, 'save'])->name('users.save');
        Route::get('/edit/{id}', [UserController::class, 'edit'])->name('users.edit');
        Route::post('/updadte/{id}', [UserController::class, 'update'])->name('users.update');
        Route::get('/delete/{id}', [UserController::class, 'delete'])->name('users.delete');
    });

    //Brands
    Route::prefix('brands')->group(function () {
        Route::get('/', [BrandController::class, 'index'])->name('brands');
        Route::get('/add', [BrandController::class, 'add'])->name('add');
        Route::get('/edit/{id}', [BrandController::class, 'edit'])->name('brands.edit');
        Route::post('/update/{id}', [BrandController::class, 'update'])->name('brands.update');
        Route::post('/save', [BrandController::class, 'save'])->name('brands.save');
        Route::get('/delete/{id}', [BrandController::class, 'delete'])->name('brands.delete');
    });

    //Products
    Route::prefix('products')->group(function () {
        Route::get('/', [ProductController::class, 'index'])->name('products');
        Route::get('/add', [ProductController::class, 'add'])->name('products.add');
        Route::post('/save', [ProductController::class, 'save'])->name('products.save');
        Route::get('/edit/{id}', [ProductController::class, 'edit'])->name('products.edit');
        Route::post('/update/{id}', [ProductController::class, 'update'])->name('products.update');
        Route::get('/delete/{id}', [ProductController::class, 'delete'])->name('products.delete');
    });

    //Parts
    Route::prefix('parts')->group(function () {
        Route::get('/', [PartController::class, 'index'])->name('parts');
        Route::get('/add', [PartController::class, 'add'])->name('parts.add');
        Route::post('/save', [PartController::class, 'save'])->name('parts.save');
        Route::get('/edit/{id}', [PartController::class, 'edit'])->name('parts.edit');
        Route::post('/update/{id}', [PartController::class, 'update'])->name('parts.update');
        Route::get('/delete/{id}', [PartController::class, 'delete'])->name('parts.delete');
    });

});
