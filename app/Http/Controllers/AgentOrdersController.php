<?php

namespace App\Http\Controllers;

use App\Models\Brand;
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
        return $request;
    }
}
