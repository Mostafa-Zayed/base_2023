<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function setLang($lang)
    {
        if(in_array($lang,['ar','en'])) {
            if (session()->has('lang')) {
                session()->forget('lang');
            }
            session()->put('lang',$lang);
        
        }
    }

    public function showLoginPage()
    {
        return view('admin.auth.login');
    }
}
