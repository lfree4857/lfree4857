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

class HomeController extends Controller
{
    private $const;
    public function __construct()
    {
        $this->const = (new Constants)->getConstants();
    }

    public function sendQuery(Request $request)
    {

        try {

            $data = $request->all();

            $sendQuery = UserQuery::create([
                'name'=>$data['name'],
                'email'=>$data['email'],
                'phone'=>$data['phone'],
                'subject'=>$data['subject'],
                'comments'=>$data['comments'],
                'year'=>date("Y");                   
            ]);

            if($sendQuery)
                ContactUsMailJob::dispatch((new MailController)->ContactUsMail($data));

                return (new ResponseHandler)->sendSuccessResponse(['message' => $this->const['CONTACT_US_MAIL']]);

        } catch (Exception $e) {
            throw new GlobalException;
        }
    }
}
