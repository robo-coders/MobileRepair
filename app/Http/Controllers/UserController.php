<?php

namespace App\Http\Controllers;

use App\Mail\UserPasswordEmail;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::latest()->get();

        return Inertia::render('Users/Index', [
            'users' => $users,
        ]);
    }

    public function admin()
    {
        $user = User::where('role', 'Admin')->latest()->get();
        return Inertia::render('Users/Admin', [
            'users' => $user,
        ]);

    }

    public function agent()
    {
        $user = User::where('role', 'Agent')->latest()->get();
        return Inertia::render('Users/Agent', [
            'users' => $user,
        ]);

    }

    public function driver()
    {
        $user = User::where('role', 'Driver')->latest()->get();
        return Inertia::render('Users/Driver', [
            'users' => $user,
        ]);

    }

    public function customer()
    {
        $user = User::where('role', 'Customer')->latest()->get();
        return Inertia::render('Users/Customer', [
            'users' => $user,
        ]);

    }
    public function add()
    {
        return Inertia::render("Users/Add");
    }

    public function save(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100', 'unique:users'],
            'mobile' => ['required', 'numeric'],
            'role' => ['required', 'string', 'in:Admin,Driver,Agent,Customer']
        ]);

        $randomPassword = Str::random(6);

        User::create([
            "name" => $request->name,
            "email" => $request->email,
            "mobile" => $request->mobile,
            "role" => $request->role,
            "password" => bcrypt($randomPassword)
        ]);


        try {
            Mail::to($request->input('email'))->send(new UserPasswordEmail($request->input('email'), $randomPassword));
        } catch (\Exception $e) {
            // return redirect()->back()->with('error', 'User has been created but failed to send email.');
        }

        return redirect()->route('users')->with('success', 'User created or updated successfully');

    }

    public function edit($id)
    {
        $user = User::find($id);
        if($user){
            return Inertia::render('Users/Edit' ,[
                'user' => $user
            ]);
        }
        
        return back();

    }

    public function update(Request $request, $id)
{
    $user = User::findOrFail($id);
    
    $validatedData = $request->validate([
        'name' => 'required|string|max:50',
        'email' => 'required|email|unique:users,email,'.$id,
        'mobile' => ['required', 'numeric'],
        'role' => 'required|string|in:Admin,Driver,Agent,Customer',
    ]);

    $user->update($validatedData);
    return redirect()->route('users')->with('success', 'User updated successfully');

}

    public function delete($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return redirect()->route('users')->with('success', 'User deleted successfully');

    }
}
