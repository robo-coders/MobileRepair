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
        $orders = Order::where('status', 'Pending')->latest()->get();
        
        return Inertia::render('Driver/Dashboard',[
            'orders' => $orders,
        ]);
    }

    public function assignToMyself($id)
    {

        Assignment::create([
            'order_id' => $id,
            'user_id' => auth()->id(),
            'assigned_at' => now(),
            'status' => 'Assigned',
        ]);

        $order = Order::findOrFail($id);
        $order->status = 'Assigned';
        $order->save();

    }

    public function myOrders()
    {
        $user = auth()->user();
        $assignedOrders = $user->userAssignments()->with('order')->get()->pluck('order');

        return $assignedOrders;


    }
}
