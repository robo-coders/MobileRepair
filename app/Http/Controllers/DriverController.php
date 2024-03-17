<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PhpParser\Node\Expr\Assign;

class DriverController extends Controller
{
    public function index()
    {
        return 'working';
    }

    public function pendingOrders()
    {
        $orders = Order::whereIn('status', ['pending', 'unAssignedShipped'])->latest()->get();
        
        return Inertia::render('Driver/Dashboard',[
            'orders' => $orders,
        ]);
    }

    public function assignToMyself($id)
    {
        $order = Order::findOrFail($id);
        
        if ($order->status == 'Pending') {
            $order->status = 'Assigned';
            $order->save();

            Assignment::create([
                'order_id' => $id,
                'user_id' => auth()->id(),
                'assigned_at' => now(),
                'status' => 'Assigned',
            ]);
        } else {
            $order->status = 'Shipped';
            $order->save();

            Assignment::create([
                'order_id' => $id,
                'user_id' => auth()->id(),
                'assigned_at' => now(),
                'status' => 'Shipped',
            ]);
        }

        return back();
    }

    public function myOrders()
    {
        $user = auth()->user();
        // $orders = $user->userAssignments()->with('order')->get()->pluck('order');
        $orders = $user->userAssignments()->with('order')->get();
        // $orders = $user->userAssignments()->with('order')->latest()->first();
        

        return Inertia::render('Driver/MyOrders',[
            'orders' => $orders
        ]);
    }

    public function markAsdelivered($id)
    {
        $order = Order::findOrFail($id);
        $order->status = 'Delivered';
        $order->save();

        Assignment::create([
            'order_id' => $id,
            'user_id' => auth()->id(),
            'completed_at' => now(),
            'status' => 'Delivered',
        ]);

        return back();
    }
}
