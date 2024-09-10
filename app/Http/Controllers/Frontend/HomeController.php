<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Genre;
use App\Models\Movie;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $genres = Genre::where('status', 1)->get();
        $categories = Category::where('status', 1)->get();
        $featuredMovies = Movie::orderBy('updated_at', 'desc')->where('isFeatured', 1)->get();
        $banneredMovies = Movie::orderBy('updated_at', 'desc')->where('isBannered', 1)->get();
        $movies = Movie::orderBy('created_at', 'desc')->where('status', 1)->get();
        return Inertia::render('Home', [
            'genres' => $genres,
            'categories' => $categories,
            'movies' => $movies,
            'banneredMovies' => $banneredMovies,
            'featuredMovies' => $featuredMovies
        ]);
    }
    public function movie($slug)
    {
        $genres = Genre::where('status', 1)->get();
        $categories = Category::where('status', 1)->get();
        $movie = Movie::with(['category'])->where('slug', $slug)->first();
        $movies_genres = Genre::whereIn('id', json_decode($movie->movies_genres))->where('status', 1)->get();
        $related_movies = Movie::where('category_id', $movie->category_id)->where('id', '!=',$movie->id)->get();
      
        $this_movie = [
            'movie' => $movie,
            'genres' => $movies_genres
        ];
        if (!$movie) {
            return abort(404);
        }
        return Inertia::render('SingleMovie', [
            'slug' => $slug,
            'genres' => $genres,
            'categories' => $categories,
            'movie' => $this_movie,
            'related_movies' => $related_movies
        ]);
    }
    public function genre($slug)
    {
        dd($slug);
    }
    public function category($slug)
    {
        $genres = Genre::where('status', 1)->get();
        $categories = Category::where('status', 1)->get();
        return Inertia::render('Category', [
            'slug' => $slug,
            'genres' => $genres,
            'categories' => $categories,
        ]);
    }
    public function alphbeticTag($character)
    {
        dd($character);
    }

    public function search()
    {
        $genres = Genre::where('status', 1)->get();
        $categories = Category::where('status', 1)->get();
        return Inertia::render('Search', [
            'genres' => $genres,
            'categories' => $categories,
        ]);
    }
}
