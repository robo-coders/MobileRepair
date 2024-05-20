<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterationRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{
    public function login (LoginRequest $request) {
        $customer = User::select([
            "id",
            "name",
            "email",
            "password"
        ])
        ->whereEmail($request->email)
        ->whereStatus("active")
        ->whereRole("customer")
        ->first();

        if (!$customer || !Hash::check($request->password, $customer->password)) {
            return response()->success(403, "Invalid Login Credentials!");
        }

        //Update last login timestamps & FCM Token
        $customer->last_active_on = Carbon::now();
        $customer->save();

        //Generate Token
        $customer->tokens()->delete();
        $customer->token = $customer->createToken($request->email)->plainTextToken;
        
        unset($customer->id);
        unset($customer->password);
        unset($customer->fcm_token);
        unset($customer->last_active_on);
        unset($customer->password);
        unset($customer->updated_at);
        unset($customer->created_at);

        return response()->success(200, "Success!", $customer);
    }

    public function register (RegisterationRequest $request) {
        $customer = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password),
            "role" => "Customer",
            "last_active_on" => Carbon::now()
        ]);

        $customer->tokens()->delete();
        $customer->token = $customer->createToken($request->email)->plainTextToken;
        
        unset($customer->id);
        unset($customer->password);
        unset($customer->role);
        unset($customer->updated_at);
        unset($customer->created_at);

        return response()->success(200, "Success!", $customer);
    }
}
