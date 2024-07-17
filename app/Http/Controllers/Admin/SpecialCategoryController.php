<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SpecialCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class SpecialCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $special_categories = SpecialCategory::orderBy('updated_at','desc')->get();
        return Inertia::render('Admin/SpecialCategory/Index',[
            'special_categories' => $special_categories
        ]);
    }

  
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        SpecialCategory::create([
            'name' => $request->category,
            'slug' => Str::slug($request->category)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = SpecialCategory::findOrFail($id);
        $category->name = $request->category;
        $category->slug = Str::slug($request->category);
        $category->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = SpecialCategory::findOrFail($id);
        $category->delete();
    }
}
