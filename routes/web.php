<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});

Route::post('/upload', function () {
    // Handle file upload logic here
})->name('upload');