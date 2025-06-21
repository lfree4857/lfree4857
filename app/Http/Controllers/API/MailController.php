<?php


namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use App\Models\{Constants, MailMessage};

use Illuminate\Support\Facades\Mail;
use App\Exceptions\GlobalException as GlobalException;

use Exception;

class MailController extends Controller
{
    private $const;

    public function __construct()
    {
        $this->const = (new Constants)->getConstants();
    }

    public function ContactUsMail($data)
    {


        try{


            $messageType = $this->const['SEND_QUERY_MAIL'];

            $fetchMsg = MailMessage::where('constant', $messageType)->where('isActive', 1)->first();

            if (!$fetchMsg) {
                throw new Exception($this->const['MAIL_NOT_FOUND']);
            }

            $replaceValues = ["{{name}}","{{email}}","{{phone}}","{{subject}}","{{comments}}"];

            $replaceFrom = [$data['name'],$data['email'],$data['phone'],$data['subject'],$data['comments'],];

            $emailContent = [
                "subject" => $fetchMsg->messageSubject,
                "body" => str_replace($replaceValues, $replaceFrom, $fetchMsg->messageBody),
                "to" => $this->const['MAIL_USERNAME']
            ];

            return $this->sendMail($emailContent);

        } catch (Exception $e){

            throw new GlobalException;
        }

    }

    public function sendMail($emailContent)
    {
        try {
            $mailSent = Mail::raw($emailContent['body'], function ($message) use ($emailContent) {
                $message->to($emailContent['to'])
                    ->subject($emailContent['subject'])
                    ->from($this->const['MAIL_USERNAME'], '')
                    ->html($emailContent['body'], 'text/html');
            });

            if ($mailSent)
                return true;
        } catch (Exception $e) {
            return false;
        }
    }
}
