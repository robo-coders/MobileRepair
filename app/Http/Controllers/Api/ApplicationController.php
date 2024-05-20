<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApplicationController extends Controller
{
    public function dashboard () {
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

    public function getOrders(Request $request) {
        $orders = Order::with(["product", "brand"])->where("user_id", Auth::id());

        if ($request->has("order_status") && $request->order_status) {
            $orders = $orders->where("status", $request->order_status);
        }

        if ($request->has("order_number") && $request->order_number) {
            $orders = $orders->where("order_number", "LIKE", "%" . $request->order_number . "%");
        }

        $orders = $orders->latest()->get();

        return response()->success(200, "Success!", [
            "orders" => $orders
        ]);
    }
}
