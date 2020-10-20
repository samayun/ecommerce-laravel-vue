<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('isAdmin');
    }


    public function logout()
    {
        try {
            Auth::guard('admin')->logout();
            session()->flush();
            return response()->json([
                'success' => true ,
                'message' => 'Admin Logouted Successfully'
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'success' => false ,
                'message' => 'Admin Logout Failed'
            ], 401);
        }
    }
    protected function guard(){
        return Auth::guard('admin');
    } 
}
