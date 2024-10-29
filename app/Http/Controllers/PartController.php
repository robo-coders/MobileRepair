<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Product_part;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class PartController extends Controller
{
    public function index()
    {
        $parts = Product_part::with(['brand:id,name', 'product:id,name'])->latest()->get();
        return Inertia::render('Parts/Index', [
            'parts' => $parts,
        ]);

    }
    public function add()
    {
        $dropdownOptions = Product::select('brand_id','id', 'name')->get();

        return Inertia::render('Parts/Add', [
            'dropdownOptions' => $dropdownOptions,
        ]);
        
    }

    public function save(Request $request)
    {
        $request->validate([
            'product_id' => ['required', 'integer'],
            'name' => ['required', 'max:100', 'string'],
            'description' => ['nullable', 'string'],
            'customer_price' => ['nullable', 'numeric'],
            'agent_price' => ['required', 'numeric'],
        ]);
    
        Product_part::updateOrCreate(
            ['id' => $request->id],
            [
                'brand_id' => $request->brand_id,
                'product_id' => $request->product_id,
                'name' => $request->name,
                'description' => $request->description,
                'customer_price' => $request->customer_price,
                'agent_price' => $request->agent_price,
            ]
        );
    
        return redirect()->route('parts')->with('success', 'Product part saved successfully');
    }

    public function edit($id)
    {
        $part = Product_part::find($id);
        $dropdownOptions = Product::select('brand_id','id', 'name')->get();

        if($part){
            return Inertia::render('Parts/Edit' ,[
                'part' => $part,
                'dropdownOptions' => $dropdownOptions,
            ]);
        }
        
        return back();
    }
    
    public function update(Request $request, $id)
    {

        $part = Product_part::findOrFail($id);

        $validatedData = $request->validate([
            'name' => ['required', 'max:100', 'string'],
            'description' => ['required', 'string'],
            'customer_price' => ['required', 'numeric'],
            'agent_price' => ['required', 'numeric'],
        ]);

        $part->update($validatedData);
        return redirect()->route('parts')->with('success', 'Product part updated successfully'); 
    }
    public function delete($id)
    {
        $part = Product_part::findOrFail($id);
        $part->delete();
        return redirect()->route('parts')->with('success', 'Product part deleted successfully');
    }
        
}
