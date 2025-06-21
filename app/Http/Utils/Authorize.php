<?php

namespace App\Http\Utils;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class Authorize
{

    public function checkAdmin() {


        $is_admin = (new Roles)->AdminRoles();

        if (Auth::user() && in_array(Auth::user()->role, $is_admin))
            return true;
        return false;
    }



    public function checkNotLogin() {

        if (!Auth::user())
            return true;
        return false;
    }


}
