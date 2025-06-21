<?php

    namespace App\Http\Utils;

    use Config;

    class Roles {
       
        public function AdminRoles() {
            return explode(",", Config::get('customConfig.Role.is_admin'));
        }
    }
?>
