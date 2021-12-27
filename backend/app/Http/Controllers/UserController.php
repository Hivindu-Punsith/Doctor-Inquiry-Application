<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Arr;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    public function register(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|unique:users',
                'password' => 'required|string|min:6'
            ]);

            $user = new User([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'roles' => ['user']
            ]);

            $user->save();
            return response()->json(['message' => 'User has been registered..!'], 200);
        } catch (Exception $exception) {

            return  response()->json(['message' => ($exception->getMessage())]);
        }
    }


    public function login(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json(['message' => 'Unauthorized User..!'], 401);
            }

            $user = User::where("email", $request->email)->select(['id', 'name', 'email', 'roles'])->first();
            $token = $request->user()->createToken('token_name', $user->roles);
            $token->plainTextToken;

            Arr::add($user, 'token', $token);
            return response()->json($user);
        } catch (Exception $exception) {

            return  response()->json(['message' => ($exception->getMessage())]);
        }
    }


    public function getUser(Request $request)
    {
        try {
            return  response()->json([
                'status' => 200,
                'user' => $request->user()
            ]);
        } catch (Exception $exception) {

            return  response()->json(['message' => ($exception->getMessage())]);
        }
    }


    public function logout(Request $request)
    {
        try {
            $user = $request->user();

            $user->currentAccessToken()->delete();

            return response()->json(['message' => 'User has been Logout..!'], 200);
        } catch (Exception $exception) {

            return  response()->json(['message' => ($exception->getMessage())]);
        }
    }



    public function checkAdmin(Request $request)
    {
        try {
            $user = $request->user();

            if ($user->tokenCan('admin')) {
                return response()->json([
                    'status' => 200,
                    'message' => $user->name . " is an admin"
                ], 200);
            }
            return response()->json([
                'status' => 200,
                'message' => "Unauthorized"
            ], 401);
        } catch (Exception $exception) {

            return  response()->json(['message' => ($exception->getMessage())]);
        }
    }
}
