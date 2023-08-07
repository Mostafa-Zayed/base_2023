<?php

use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


/*
    admin routes
*/
Route::group(['prefix' => 'admin'],function(){

    Route::get('login',[AuthController::class,'showLoginPage'])->name('admin.show-login-page');
    Route::post('login',[AuthController::class,'Login'])->name('admin.make-login');
    Route::post('logout',[AuthController::class,'logout'])->name('admin.logout');
    Route::get('lang/{lang}',[AuthController::class,'setLang'])->name('admin.setlang');

    Route::get('user',[UserController::class,'index'])->name('admin.user.index');
});


Route::group(['prefix' => 'user'],function(){
    Route::get('',[UserController::class,'index'])->name('user.index');
});
