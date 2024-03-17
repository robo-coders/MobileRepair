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
        return Inertia::render('Orders/Agent_index');

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

        $order = Order::create([
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
