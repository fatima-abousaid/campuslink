<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;

// Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',    [AuthController::class, 'login']);

// Announcements
Route::get('/announcements',          [AnnouncementController::class, 'index']);
Route::get('/announcements/{id}',     [AnnouncementController::class, 'show']);
Route::post('/announcements',         [AnnouncementController::class, 'store']);
Route::put('/announcements/{id}',     [AnnouncementController::class, 'update']);
Route::delete('/announcements/{id}',  [AnnouncementController::class, 'destroy']);

// Comments
Route::post('/comments',              [CommentController::class, 'store']);
Route::delete('/comments/{id}',       [CommentController::class, 'destroy']);

// Categories
Route::get('/categories',             [CategoryController::class, 'index']);
Route::post('/categories',            [CategoryController::class, 'store']);
