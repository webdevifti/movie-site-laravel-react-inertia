<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\MovieResourceCollection;
use App\Models\Category;
use App\Models\Genre;
use App\Models\Movie;
use Exception;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $all_movies = Movie::orderBy('created_at', 'desc')->get();
        $movies = MovieResourceCollection::collection($all_movies);
        return Inertia::render('Admin/Movie/Index', [
            'movies' => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $active_categories = Category::where('status', 1)->get();
        $active_ganres = Genre::where('status', 1)->get();
        return Inertia::render('Admin/Movie/CreateForm', [
            'active_categories' => $active_categories,
            'active_ganres' => $active_ganres
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       
        $active_categories = Category::where('status', 1)->get();
        $active_ganres = Genre::where('status', 1)->get();
        try {
            $casts = [];
            foreach ($request->casts as $key => $cast) {
                if ($request->hasFile("casts.$key.cast_img")) {
                    $casts_image = fileUpload($request, "casts.$key.cast_img", 'uploads/movies/casts/');
                } else {
                    $casts_image = null;
                }
                $casts[] = [
                    'name' => $cast['cast_name'],
                    'img' => $casts_image,
                    'role' => $cast['cast_role'],
                    'character' => $cast['character_name'],
                ];
            }
            $poster = fileUpload($request, 'poster', 'uploads/movies/posters/');
            $movie = Movie::create([
                'title' => $request->title,
                'original_title' => $request->originaltitle,
                'slug' => Str::slug($request->originaltitle),
                'releasing_year' => $request->releasing_year,
                'imdb_rating' => $request->rating,
                'category_id' => $request->category,
                'poster' => $poster,
                'trailer_url' => $request->trailer,
                'info_description' => $request->description,
                'movies_casts' => json_encode($casts),
                'movies_genres' => json_encode($request->genre),
                'movies_links' => json_encode($request->links)
            ]);
            return Inertia::render('Admin/Movie/CreateForm', [
                'movie' => $movie,
                'status' => 'success',
                'active_categories' => $active_categories,
                'active_ganres' => $active_ganres
            ]);
        } catch (Exception $e) {
            return Inertia::render('Admin/Movie/CreateForm', [
                'error' => $e->getMessage(),
                'active_categories' => $active_categories,
                'active_ganres' => $active_ganres
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $movie = Movie::findOrFail($id);
        $movie->delete();
        return redirect()->back()->with('status', 'success');
    }

    public function toggleFeature($id){
        $movie = Movie::findOrFail($id);
        $movie->isFeatured = $movie->isFeatured == 1 ? 0 : 1;
        $movie->save();
        return redirect()->back()->with('status', 'success');
    }
    public function toggleBannered($id){
        $movie = Movie::findOrFail($id);
        $movie->isBannered = $movie->isBannered == 1 ? 0 : 1;
        $movie->save();
        return redirect()->back()->with('status', 'success');
    }
}
