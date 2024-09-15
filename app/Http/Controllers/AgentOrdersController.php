<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Order;
use App\Models\Order_part;
use App\Models\Product_part;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use PhpParser\Builder\Param;

class AgentOrdersController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $orders = Order::with('order_parts', 'brand', 'product')->latest()->get();

        // $orders = Order::with('brand')
        $orders = Order::with('order_parts', 'brand', 'product')
                    ->where('user_id', $user->id)
                    ->latest()->get();

        return Inertia::render('Orders/Agent_index', [
            'orders' => $orders,
        ]);

    }

    public function add()
    {
        $brands = Brand::with("products", "products.product_parts")
                    ->whereStatus("active")
                    ->get();

        return Inertia::render('Orders/Agent_add', [
            'brands' => $brands,
        ]);
        
    }

    public function save(Request $request)
    {
        $part = Product_part::where("id", $request->part_id)->first();
        $latestOrder = Order::latest()->first();
        $orderNumber = 'OR-' . str_pad($latestOrder ? $latestOrder->id + 1 : 1, 6, '0', STR_PAD_LEFT);

        $order = Order::create([
            'order_number' => $orderNumber,
            'user_id' => Auth::id(),
            'brand_id' => $request->brand_id,
            'product_id' => $request->product_id,
            'description' => $request->description,
            'total_amount' => $part->agent_price
        ]);
            
        Order_part::create([
            'order_id' => $order->id,
            'part_id' => $request->part_id,
            'amount' => $part->agent_price
        ]);

        return redirect("/agent/orders");

    }
}
