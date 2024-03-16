<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Order;
use App\Models\Order_part;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgentOrdersController extends Controller
{
    public function index()
    {
        return Inertia::render('Orders/Agent_index');

    }

    public function add()
    {
        $dropdownOptions = Brand::with('products.product_parts')->get();

        return Inertia::render('Orders/Agent_add', [
            'dropdownOptions' => $dropdownOptions,
        ]);
        
    }

    public function save(Request $request)
    {
        $order = Order::create([
            'user_id' => '2',
            'brand_id' => '4',
            'product_id' => '4',
            'description' => 'test desc',
            'total_amount' => '100',
        ]);
            
        Order_part::create([
            'order_id' => $order->id,
            'part_id' => '5',
            'amount' => '100',
        ]);

        return back();

    }
}
