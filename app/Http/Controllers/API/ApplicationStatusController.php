<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\API\MailController;

use Illuminate\Http\Request;

use App\Http\Utils\ResponseHandler;
use App\Exceptions\GlobalException as GlobalException;
use App\Models\{
    Constants,
    UserQuery
};

use App\Jobs\ContactUsMailJob;


use Illuminate\Support\Facades\DB;
use Exception;

class ApplicationStatusController extends Controller
{
    
    public function status()
    {

        try {
            $isEnabled = env('ENABLE_APPLICATION');
            return response()->json([
                'enable_application' => $isEnabled
            ]);
        } catch (Exception $e) {
            throw new GlobalException;
        }
    }
}
