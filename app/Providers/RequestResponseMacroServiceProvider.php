<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class RequestResponseMacroServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Response::macro("success", function ($code = 200, $message = "Success", $data = [] ,  $httpCode = 200) {

            $response = [
                "code"  => $code,
                "message" => $message,
                "timestamp" => Carbon::now(),
                "data" => $data
            ];

            return Response::json($response, $httpCode);
        });

        Response::macro("error", function ($code = 400, $message = "Failure", $data = [] ,  $httpCode = 200) {
            
            $response = [
                "code"  => $code,
                "message" => $message,
                "timestamp" => Carbon::now(),
                "data" => $data
            ];

            return Response::json($response, $httpCode);
        });
    }
}
