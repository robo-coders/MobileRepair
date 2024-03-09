<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Brand;



class BrandController extends Controller
{
    public function index()
{
        $brands = Brand::latest()->get();

        return Inertia::render('Brands/Index', [
            'brands' => $brands,
        ]);
}

    /**
     * Show the form to create a new brand.
     */
    public function add()
    {
            return Inertia::render('Brands/Add');
    }
    

public function save(Request $request)
{
    $request->validate([
        'name' => ['required', 'max:255', 'string'],
        'description' => ['required', 'string'],
        'logo' => ['required', 'mimes:jpg,png,jpeg', 'max:2048'], //max:2MB
    ]);
    
    $logoPath = $request->file('logo')->store('public/logos');
    
    Brand::create([
        'name' => $request->name,
        'description' => $request->description,
        'path' => str_replace("public", "storage", $logoPath)
    ]);
    
    return redirect()->route('brands')->with('success', 'Brand saved successfully');
}

public function edit($id)
    {
        $brand = Brand::find($id);

        if($brand){
            return Inertia::render('Brands/Edit' ,[
                "brand" => $brand
            ]);
        }

        return back();
    }
    
    function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:50',
            'description' => ['required', 'string'],
            'logo' => ['nullable', 'mimes:jpg,png,jpeg', 'max:2048'], //max:2MB
        ]);

        $brand = Brand::findOrFail($id);

        $brand->name = $request->name;
        $brand->description = $request->description;

        if ($request->hasFile("logo")) {
            $logoPath = $request->file('logo')->store('public/logos');
            $brand->path = str_replace("public", "storage", $logoPath);
        }
        $brand->save();

        return redirect()->route('brands')->with('success', 'Bran updated successfully'); 
    }

public function delete($id)
{
    $brand = Brand::findOrFail($id);
    $brand->delete();

    return redirect()->route('brands')->with('success', 'Brand deleted successfully');
}


}
