<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MovieResourceCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'original_title' => $this->originaltitle,
            'status' => $this->status,
            'poster' => asset('storage/uploads/movies/posters/'.$this->poster),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
