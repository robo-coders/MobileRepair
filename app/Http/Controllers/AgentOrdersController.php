<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Order;
use App\Models\Order_part;
use App\Models\Product;
use App\Models\Product_part;
use App\Models\User;
use App\Notifications\NewDriverOrderNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use PhpParser\Builder\Param;
use Stripe\StripeClient;

class AgentOrdersController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $orders = Order::with('order_parts', 'order_parts.part', 'brand', 'product')
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
                    ->whereIn("type", ["Agent", "Both"])
                    ->get();

        // $user = User::with(["addresses"])->whereId(Auth::id())->first();

        // return $user;

        return Inertia::render('Orders/Agent_add', [
            'brands' => $brands,
            'pk' => env("STRIPE_PUB_KEY"),
        ]);
        
    }

    public function save(Request $request)
    {
        $parts       = Product_part::whereIn("id", $request->parts)->get();
        $product     = Product::find($request->product_id);
        $brand       = Brand::find($request->brand_id);
        $amount      = 0;
        $orderNumber = strtoupper(\Str::random(8));
        $narration   = "AGENT ORDER # " . $orderNumber . " | " . $brand->name . " | " . $product->name . " | Reparapido";

        foreach ($parts as $part) { $amount += $part->agent_price; }

        if ($request->payment_method == "Credit Card") {
            $stripe      = new StripeClient(env('STRIPE_SECRET'));

            $stripe->charges->create([
                'amount'        => $amount * 100,
                'currency'      => 'eur',
                'source'        => $request->cardToken,
                'description'   => $narration,
                'receipt_email' => (Auth::user()->email) ?? ""
            ]);
        }

        $order = Order::create([
            'user_id'          => Auth::id(),
            'order_number'     => $orderNumber,
            'brand_id'         => $request->brand_id,
            'product_id'       => $request->product_id,
            'delivery_address' => $request->address,
            'description'      => $request->description,
            'sub_total_amount' => $amount,
            'total_amount'     => $amount,
            'payment_method'   => $request->payment_method,
            'status'           => "Pending"
        ]);

        foreach ($parts as $part) {
            Order_part::create([
                'order_id' => $order->id,
                'part_id' => $part->id,
                'amount' => $part->agent_price
            ]);
        }
        
        $order->narration = $narration;

        $drivers = User::whereRole("Driver")->whereStatus("active")->get();

        foreach ($drivers as $driver) {
            $driver->notify(new NewDriverOrderNotification($order));
        }

        return redirect("/agent/orders");
    }
}
