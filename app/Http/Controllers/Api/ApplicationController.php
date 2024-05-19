<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class ApplicationController extends Controller
{
    public function dashboard (Request $request) {

        $pendingOrders = Order::where("user_id", Auth::id())->where("status", "Pending")->count();
        $assignedOrders = Order::where("user_id", Auth::id())->where("status", "Assigned")->count();
        $processingOrders = Order::where("user_id", Auth::id())->where("status", "Processing")->count();
        $shippedOrders = Order::where("user_id", Auth::id())->where("status", "Shipped")->count();
        $deliveredOrders = Order::where("user_id", Auth::id())->where("status", "Delivered")->count();
        $cancelledOrders = Order::where("user_id", Auth::id())->where("status", "Cancelled")->count();

        $recentOrders = Order::with(["product", "brand"])->where("user_id", Auth::id())->latest()->take(5)->get();

        return response()->success(200, "Success!", [
            "pendingOrders" => $pendingOrders,
            "assignedOrders" => $assignedOrders,
            "processingOrders" => $processingOrders,
            "shippedOrders" => $shippedOrders,
            "deliveredOrders" => $deliveredOrders,
            "cancelledOrders" => $cancelledOrders,
            "recentOrders" => $recentOrders,
        ]);
    }
}
