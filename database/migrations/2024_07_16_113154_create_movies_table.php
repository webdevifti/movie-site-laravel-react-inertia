<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable()->unique();
            $table->string('original_title')->nullable()->unique();
            $table->string('slug')->nullable();
            $table->string('releasing_year')->nullable();
            $table->double('imdb_rating',20,2)->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('special_category_id')->nullable();
            $table->string('poster')->nullable();
            $table->string('trailer_url')->nullable();
            $table->text('info_description')->nullable();
            $table->text('movies_links')->nullable();
            $table->text('movies_casts')->nullable();
            $table->text('movies_genres')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
