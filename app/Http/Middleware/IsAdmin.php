<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        
        if (!Auth::guard('admin')->check()) {
            if ($request->ajax()) {
                return response()->json([
                    'message' => 'Authenticate Failed'
                ],401);
            } else {
                return redirect('login/admin');
            }
            
        }
        // return response()->json(['st' => Auth::guard('admin')->check()], 200);;
        return $next($request);
        
    }
}
