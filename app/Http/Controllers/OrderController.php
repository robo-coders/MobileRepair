<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('order_parts', 'brand', 'product')->latest()->get();
        return Inertia::render('Orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function changeStatusToProcessing($id)
    {
        $order = Order::findOrFail($id);
        $order->status = "Processing";
        $order->save();
        
        $order->orderAssignments()->update(['status' => 'Processing']);
        $order->save();
        return back();
    }

    public function changeStatusToUnAssignedShipped($id)
    {
        Assignment::Create([
            'order_id' => $id,
            'assigned_at' => now(),
            'status' => 'unAssignedShipped',
        ]);

        $order = Order::findOrFail($id);
        $order->status = "unAssignedShipped";
        $order->save();
        return back();
    }
}
