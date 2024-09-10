<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\GenreController;
use App\Http\Controllers\Admin\MovieController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[HomeController::class, 'index'])->name('home');
Route::get('/search',[HomeController::class, 'search'])->name('search');
Route::get('/category/{slug}',[HomeController::class, 'category']);
Route::get('/special-category/{slug}',[HomeController::class, 'specialCategory']);
Route::get('/genre/{slug}',[HomeController::class, 'genre']);
Route::get('/movie/{slug}',[HomeController::class, 'movie']);
Route::get('/tag/alphabetic/{character}',[HomeController::class, 'alphbeticTag']);


Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::name('admin.')->prefix('admin')->group(function(){
        Route::resource('/genres',GenreController::class);
        Route::resource('/categories', CategoryController::class);
        Route::resource('/movies', MovieController::class);
        Route::get('movies/featured/{id}', [MovieController::class, 'toggleFeature']);
        Route::get('movies/bannered/{id}', [MovieController::class, 'toggleBannered']);
    });
});

require __DIR__.'/auth.php';
