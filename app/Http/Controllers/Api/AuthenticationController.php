<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Models\Device;
use App\Models\User;
use Carbon\Carbon;
use ErrorException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

    public function login (LoginRequest $request) {
        $customer = User::select([
            "id",
            "name",
            "email",
            "password"
        ])
        ->whereEmail($request->email)
        ->first();

        if (!Hash::check($request->password, $customer->password)) {
            throw new ErrorException("Invalid Login Credentials!", 403);
        }

        //Update last login timestamps & FCM Token
        $customer->last_active_on = Carbon::now();
        $customer->fcm_token = $request->fcmToken;
        $customer->save();

        //Update devices table
        Device::updateOrCreate([
            "user_id" => $customer->id,
            "deviceId" => $request->device["deviceId"]
        ], [
            "user_id" => $customer->id,
            "deviceId" => $request->device["deviceId"],
            "version" => $request->applicationVersion,
            "memUsed" => $request->device["memUsed"],
            "diskFree" => $request->device["diskFree"],
            "diskTotal" => $request->device["diskTotal"],
            "realDiskFree" => $request->device["realDiskFree"],
            "realDiskTotal" => $request->device["realDiskTotal"],
            "model" => $request->device["model"],
            "operatingSystem" => $request->device["operatingSystem"],
            "osVersion" => $request->device["osVersion"],
            "androidSDKVersion" => $request->device["androidSDKVersion"],
            "platform" => $request->device["platform"],
            "manufacturer" => $request->device["manufacturer"],
            "isVirtual" => $request->device["isVirtual"],
            "name" => $request->device["name"],
            "webViewVersion" => $request->device["webViewVersion"]
        ]);

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
}
