<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;

use App\Http\Utils\{ResponseHandler, Roles};

use App\Http\Requests\{Login};

use App\Models\{Constants,User};

use Illuminate\Support\Facades\Hash;
use App\Exceptions\GlobalException as GlobalException;
use Exception;
use Carbon\Carbon;

class AuthController extends Controller
{
    private $const, $logConst;


    public function __construct()
    {
        $this->const = (new Constants)->getConstants();

    }


    public function login(Login $request)
    {
        try {


            $user = User::where('email', $request->userName)->where('isActive', 1)->first();

            if (!empty($user)) {


                    $role = (new Roles)->AdminRoles();



                    if ($request->getPathInfo() == "/api/v1/auth/login" && !in_array($user->role, $role))
                        return (new ResponseHandler)->sendErrorResponse(['messsage' => $this->const['UNAUTHORIZED_CREDENTIALS']], 401);


                    if (!Hash::check($request->passWord, $user->password))
                        return (new ResponseHandler)->sendErrorResponse(['messsage' => $this->const['UNAUTHORIZED_CREDENTIALS']], 401);

                    $token = $user->createToken('authToken')->plainTextToken;

                    if ($token)
                        return (new ResponseHandler)->sendSuccessResponse([
                            'token' => $token,
                            'name' => $user->name,
                            'id' => $user->id,
                            'message' => $this->const['LOGGED_IN']
                        ]);


            } else {
                return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['UNAUTHORIZED_CREDENTIALS']], 401);
            }


        } catch (Exception $e) {
        dd($e);
            throw new GlobalException;

        }
    }


    public function logout(Request $request)
    {
        try {


            if (!empty($request->user->id)) {
                $deleteToken = auth('sanctum')->user()->currentAccessToken()->delete();
                if ($deleteToken)
                    return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['LOG_OUT']]);
            }
            return (new ResponseHandler)->sendErrorResponse(['message' => $this->const['TOKEN_EXPIRED']], 401);
        } catch (Exception $e) {

            throw new GlobalException;

        }
    }


}
?>
