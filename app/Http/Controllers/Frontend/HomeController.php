<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Genre;
use App\Models\SpecialCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $genres = Genre::where('status', 1)->get();
        $categories = Category::where('status', 1)->get();
        $special_categories = SpecialCategory::where('status', 1)->get();
        return Inertia::render('Home', [
            'genres' => $genres,
            'categories' => $categories,
            'special_categories' => $special_categories
        ]);
    }
    public function movie($slug)
    {
        $genres = Genre::where('status', 1)->get();
        $categories = Category::where('status', 1)->get();
        $special_categories = SpecialCategory::where('status', 1)->get();
        return Inertia::render('SingleMovie', [
            'slug' => $slug,
            'genres' => $genres,
            'categories' => $categories,
            'special_categories' => $special_categories
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
        $special_categories = SpecialCategory::where('status', 1)->get();
        return Inertia::render('Category', [
            'slug' => $slug,
            'genres' => $genres,
            'categories' => $categories,
            'special_categories' => $special_categories
        ]);
    }
    public function specialCategory($slug)
    {
        dd($slug);
    }

    public function alphbeticTag($character)
    {
        dd($character);
    }

    public function search()
    {
        $genres = Genre::where('status', 1)->get();
        $categories = Category::where('status', 1)->get();
        $special_categories = SpecialCategory::where('status', 1)->get();
        return Inertia::render('Search',[
            'genres' => $genres,
            'categories' => $categories,
            'special_categories' => $special_categories
        ]);
    }
}
