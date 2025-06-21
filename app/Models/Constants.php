<?php

namespace App\Models;

class Constants {

    public function getConstants() {
        return [

            "WRONG"=>"Something Goes Wrong",
            "SERVER_ERROR"=>"Something Went Wrong",
            "SEND_QUERY_MAIL" => env("SEND_QUERY_MAIL"),
            "CONTACT_US_MAIL" => "Mail Sent!",
            "MAIL_NOT_FOUND" => "Mail Not Found!",
            "MAIL_USERNAME"=>env("MAIL_USERNAME"),
            "BLOG_ADD"=>"Blog Added!",
            "BLOG_UPDATE"=>"Blog Updated!",
            "BLOG_DELETE"=>"Blog Deleted!",
            "UNABLE_TO_DELETE"=>"Unable to Delete",
            "UNABLE_TO_UPDATE"=>"Unable to Update",
            "UNAUTHORIZED_CREDENTIALS" => "Invalid Username or Password",
            "LOGGED_IN" => "Logged In Successfully!",
            "LOG_OUT" => "Successfully Logged Out!",
            "TOKEN_EXPIRED" => "Unauthenticated!",


        ];
    }
}
