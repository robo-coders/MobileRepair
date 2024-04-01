<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthenticationController extends Controller
{
    public function check (Request $request) {
        $customer = User::select([
            "name",
            "email",
            "profile_photo_path"
        ])
        ->whereEmail($request->email)
        ->first();

        return response()->success(200, "Success!", [
            "customer" => ($customer) ?? ""
        ]);
        
    }
}
