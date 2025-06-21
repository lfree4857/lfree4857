<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;

use App\Models\Constants;

use App\Http\Utils\{ResponseHandler, Roles};

use Exception;

use Auth;

use Closure;

class AuthUser
{
    private $const,$logConst;

    public function __construct()
    {
        $this->const = (new Constants)->getConstants();
    }

    public function handle(Request $request, Closure $next)
    {
        try{


            // admin guard check
            if(!empty(auth('sanctum')->user()->id) && !empty(auth('sanctum')->user()->id) && in_array((auth('sanctum')->user()->role), (new Roles)->AdminRoles())) {

                $request['user']=auth('sanctum')->user(); // {id, first_name, last_name, role}


                return $next($request);
            }

            return (new ResponseHandler)->sendErrorResponse(['message'=>$this->const['TOKEN_EXPIRED']], 401);

        } catch(Exception $e){
            return (new ResponseHandler)->sendErrorResponse(['message'=>$this->const['TOKEN_EXPIRED']], 401);
        }
    }
}
