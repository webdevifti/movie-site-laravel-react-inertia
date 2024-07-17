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
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
        });

        Schema::create('movies_links', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_id');
            $table->text('download_url')->nullable();
            $table->string('quality')->nullable();
            $table->string('size')->nullable();
            $table->string('language')->nullable();
            $table->timestamps();
            $table->foreign('movie_id')
            ->references('id')->on('movies')
            ->onDelete('cascade');
        });
        Schema::create('movies_casts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_id');
            $table->text('name')->nullable();
            $table->string('role')->nullable();
            $table->string('img')->nullable();
            $table->string('character_name')->nullable();
            $table->timestamps();
            $table->foreign('movie_id')
            ->references('id')->on('movies')
            ->onDelete('cascade');
        });
        Schema::create('movies_genres', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('movie_id');
            $table->integer('genre_id')->nullable();
            $table->timestamps();
            $table->foreign('movie_id')
            ->references('id')->on('movies')
            ->onDelete('cascade');
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
