<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->path() != "logout") {
            if (Auth::check()) {
                if(Auth::user()->role == "Agent") {
    
                    if ($request->route()->getPrefix() != "/agent/applications") {
                        $agentApplication = Auth::user()->agentApplications()->latest()->first();

                        if (!$agentApplication || $agentApplication->status != "Approved") {
                            return redirect("/agent/applications");
                        }
                        else {
                            return $next($request);
                        }
                    }
                    else {
                        $agentApplication = Auth::user()->agentApplications()->latest()->first();

                        if ($agentApplication && $agentApplication->status == "Approved") {
                            return redirect("/dashboard");
                        }
                        else {
                            return $next($request);
                        }
                    }    
                }
                else {
                    if ($request->route()->getPrefix() == "/agent/applications") {
                        return redirect("/dashboard");
                    }
    
                    return $next($request);
                }
            }
            else {
                return redirect("/login");
            }
        }
        else {
            return $next($request);
        }
        
    }
}
