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
        $orders = Order::whereIn('status', ['pending', 'ready_to_shipped'])->latest()->get();
        
        return Inertia::render('Driver/Dashboard',[
            'orders' => $orders,
        ]);
    }

    public function assignToMyself($id)
    {
        $order = Order::findOrFail($id);
        
        if ($order->status == 'pending') {
            $order->status = 'assinged_towards_shop';
            $order->save();

            Assignment::create([
                'order_id' => $id,
                'user_id' => auth()->id(),
                'assigned_at' => now(),
                'status' => 'assinged_towards_shop',
            ]);
        } else {
            $order->status = 'assinged_towards_client';
            $order->save();

            Assignment::create([
                'order_id' => $id,
                'user_id' => auth()->id(),
                'assigned_at' => now(),
                'status' => 'assinged_towards_client',
            ]);
        }

        return back();
    }

    public function deliveredToShop($id)
    {
        $order = Order::findOrFail($id);
        $order->status = 'delivered_to_shop';
        $order->save();

        // $order->orderAssignments()->update(['status' => 'delivered_to_shop']);
        // $order->save();

        $assignment = Assignment::where('order_id', $order->id)
                ->where('status', 'assinged_towards_shop')
                ->first();
        $assignment->status = 'delivered_to_shop';
        $assignment->completed_at = now();
        $assignment->save();

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
        $order->status = 'delivered_to_client';
        $order->save();

        $assignment = Assignment::where('order_id', $order->id)
                ->where('status', 'assinged_towards_client')
                ->first();
        $assignment->status = 'delivered_to_client';
        $assignment->completed_at = now();
        $assignment->save();

        return back();
    }
}
