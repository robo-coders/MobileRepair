<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use App\Models\Order;
use App\Models\Order_part;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $orders = Order::with('order_parts', 'order_parts.part', 'brand', 'product', 'user')->latest()->get();

        return Inertia::render('Orders/Index', [
            'orders' => $orders,
        ]);
    }

    public function changeStatusToProcessing($id)
    {
        $order = Order::findOrFail($id);
        $order->status = "Processing";
        $order->save();

        return back();
    }

    public function changeStatusToReadyToShipped($id)
    {
        $order = Order::findOrFail($id);
        $order->status = "Shipped";
        $order->save();

        $assignment = Assignment::where('order_id', $order->id)
                ->where('status', 'Processing')
                ->first();
        $assignment->status = 'Shipped';
        $assignment->save();
        
        return back();
    }

    public function changeStatusToCompleted($id)
    {
        return $id;
        // $order = Order::findOrFail($id);
        // $order->status = 'completed';
        // $order->save();

        // $assignment = Assignment::where('order_id', $order->id)
        //         ->where('status', 'delivered_to_client')
        //         ->first();
        // $assignment->status = 'complete';
        // $assignment->completed_at = now();
        // $assignment->save();

        // return back();
    }

    public function changeStatusToCancelled($id)
    {
        $order = Order::findOrFail($id);
        $order->status = "Cancelled";
        $order->save();

        $assignment = Assignment::where('order_id', $id)->first();
        if ($assignment) {
            $assignment->status = "Cancelled";
            $assignment->save();
        }
        
        return back();
    }
}
