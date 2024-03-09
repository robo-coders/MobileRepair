<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('brand')->latest()->get();

        return Inertia::render('Products/Index', [
            'products' => $products
        ]);

    }

    public  function add()  
    {
        $dropdownOptions = Brand::select('id', 'name')->get();

        return Inertia::render('Products/Add', [
            'dropdownOptions' => $dropdownOptions,
        ]);
    }

    public function save(Request $request)
    {
        $request->validate([
            'brand_id' => ['required', 'integer', 'exists:brands,id'],
            'name' => ['required', 'max:100', 'string'],
            'description' => ['required', 'string', 'max:500'],
            'path' => ['required', 'mimes:jpg,png,jpeg', 'max:2048'], //max:2MB
        ]);
        
        $path = $request->file('path')->store('public/products');
        // $path = $request->file('path')->store('public/agents/documents');

        Product::create([
            'brand_id' => $request->brand_id,
            'name' => $request->name,
            'description' => $request->description,
            'path' => str_replace("public", "storage", $path)
        ]);

        return redirect()->route('products')->with('success', 'Product saved successfully');
    }

    public function edit($id)
    {
        $product = Product::find($id);
        $dropdownOptions = Brand::select('id', 'name')->get();

        if($product){
            return Inertia::render('Products/Edit' ,[
                'product' => $product,
                'dropdownOptions' => $dropdownOptions,
            ]);
        }
        
        return back();
    }

    function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'brand_id' => ['required', 'integer', 'exists:brands,id'],
            'name' => ['required', 'max:100', 'string'],
            'description' => ['required', 'string', 'max:500'],
        ]);

        $product = Product::findOrFail($id);
        $product->update($validatedData);

        return redirect()->route('products')->with('success', 'Product updated successfully'); 
    }

    public function delete($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return redirect()->route('products')->with('success', 'Brand deleted successfully');
    }

}
