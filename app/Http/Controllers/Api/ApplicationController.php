<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddNewAddressRequest;
use App\Http\Requests\DeleteNewAddressRequest;
use App\Http\Requests\PlaceOrderRequest;
use App\Models\Address;
use App\Models\AddressCategory;
use App\Models\Brand;
use App\Models\Order;
use App\Models\Order_part;
use App\Models\Product;
use App\Models\Product_part;
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
    
    public function getOrderDetails($id) {
        $order = Order::with(["product", "brand", "order_parts", "order_parts.part"])->where("user_id", Auth::id())->where("id", $id)->first();

        return response()->success(200, "Success!", [
            "order" => $order
        ]);
    }
    
    public function fetchBrands() {
        $brands = Brand::whereStatus("active")->orderBy("name", "asc")->get();

        return response()->success(200, "Success!", [
            "brands" => $brands
        ]);
    }

    public function fetchBrandProducts($brandId) {
        $products = Product::whereStatus("available")->where("brand_id", $brandId)->orderBy("name", "asc")->get();

        return response()->success(200, "Success!", [
            "products" => $products
        ]);
    }
    
    public function fetchProductParts($productId) {
        $parts = Product_part::whereStatus("active")->where("product_id", $productId)->orderBy("name", "asc")->get();

        return response()->success(200, "Success!", [
            "parts" => $parts
        ]);
    }
    
    public function placeOrder(PlaceOrderRequest $placeOrderRequest) {
        $part = Product_part::find($placeOrderRequest->part_id);

        $order = Order::create([
            'user_id' => Auth::id(),
            'order_number' => \Str::random(8),
            'brand_id' => $placeOrderRequest->brand_id,
            'product_id' => $placeOrderRequest->product_id,
            'delivery_address' => $placeOrderRequest->delivery_address,
            'description' => $placeOrderRequest->description,
            'total_amount' => $part->customer_price,
            'status' => "Pending"
        ]);

        Order_part::create([
            'order_id' => $order->id,
            'part_id' => $placeOrderRequest->part_id,
            'amount' => $part->customer_price
        ]);

        return response()->success(200, "Success!", [
            "order" => $order
        ]);
    }

    public function fetchCustomerAddresses() {
        return response()->success(200, "Success!", [
            "addresses" => Auth::user()->addresses,
            "categories" => AddressCategory::all()
        ]);
    }

    public function saveCustomerAddress(AddNewAddressRequest $addNewAddressRequest) {
        Address::updateOrcreate([
            "id" => $addNewAddressRequest->address_id
        ], [
            "user_id" => Auth::id(),
            "title" => $addNewAddressRequest->title,
            "address" => $addNewAddressRequest->address,
            "phone" => $addNewAddressRequest->phone,
            "category" => $addNewAddressRequest->category
        ]);

        return response()->success(200, "Success!", [
            "addresses" => Auth::user()->addresses
        ]);
    }
    
    public function deleteCustomerAddress(DeleteNewAddressRequest $deleteNewAddressRequest) {
        Address::whereId($deleteNewAddressRequest->address_id)->delete();

        return response()->success(200, "Success!", [
            "addresses" => Auth::user()->addresses
        ]);
    }
}
