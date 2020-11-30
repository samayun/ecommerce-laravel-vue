<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    public function login(Request $request)
    {
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);
        $hasAccount = User::where('email',$request->email)->first();
        if (!$hasAccount) {
            return response()->json([
                'errors' => [
                    'email' => ['There has no account with this email']
                ]
            ] , 422);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password], $request->remember)) {
            // email me /
            $user = Auth::user();
            // event(new EventsAdminLoginAlert($User));
            // dispatch(new SendEmailJobs($User));
            return response()->json([
                'success' => true ,
                'message' => 'User Login Successfully',
                'user' => $user
            ], 200);
        }
        return response()->json([
            'errors' => [
                'password' => ['Your Password is incorrect']
            ]
        ] , 422);
    }

    public function logout()
    {
        try {
            Auth::logout();
            session()->forget('_token');
            session()->regenerate("_token");
            return response()->json([
                 'csrfToken' => session()->get('_token'),
                'success' => true ,
                'message' => 'User Logout Successfully'
            ], 200);

        } catch (Throwable $th) {
            return response()->json([
                'success' => false ,
                'message' => 'User Logout Failed'
            ], 401);
        }
    }
}
