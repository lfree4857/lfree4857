<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\API\BlogController;
use App\Http\Controllers\API\HomeController;
use App\Http\Controllers\API\MernApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::group(['prefix' => 'v1'], function () {

    Route::post('/sendQuery',[HomeController::class,'sendQuery']);


    // Public Routes Start //
    Route::group(['prefix' => 'auth'], function () {
        Route::controller(AuthController::class)->group(function () {
            Route::post("login", "login");
        });
    });

    // Routes for blogController
    Route::controller(BlogController::class)->group(function () {
        Route::get('/getAllBlog', 'getAllBlog')->name('getAllBlog');
        Route::get('/getBlogById/{id}', 'getBlogById')->name('getBlogById');
    });


    // Protected Routes start
    Route::group(['middleware' => 'userAuth'], function () {

        Route::controller(AuthController::class)->group(function () {
            Route::post("/auth/logout", "logout");
        });

         // Routes for blogController
        Route::controller(BlogController::class)->group(function () {
            Route::post('/addBlog', 'addBlog')->name('addBlog');
            Route::post('/editBlog', 'editBlog')->name('editBlog');
            Route::delete('/deleteBlog/{id}', 'deleteBlog')->name('deleteBlog');
            Route::get('/getAllUser', 'getAllUser')->name('getAllUser');
        });



    });
    // Protected Routes end
});


Route::group(['prefix' => 'v1/mernapi'], function () {

    Route::get('/blog-posts', [MernApiController::class, 'fetchPosts']);
    Route::get('/projects', [MernApiController::class, 'fetchProjects']);


});
