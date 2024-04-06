<?php

namespace App\Exceptions;

use Error;
use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];


    public function register(): void
    {
        // $this->reportable(function (Throwable $e) {
        //     //
        // });

        $this->renderable(function (Exception $e, $request) {
            if ($request->is('api/*') && $request->wantsJson()) {
                return response()->error(($e->getCode() != 0) ? $e->getCode() : 500, (!empty($e->getMessage())) ? $e->getMessage() : "General Exception", $e->getTrace());
            }
        });

        $this->renderable(function (Error $e, $request) {
            if ($request->is('api/*') && $request->wantsJson()) {
                return response()->error(($e->getCode() != 0) ? $e->getCode() : 500, (!empty($e->getMessage())) ? $e->getMessage() : "General Exception", $e->getTrace());
            }
        });
    }
}
