import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import related_movies from "@/assets/related_movies";
import MovieCard from "./MovieCard";

const RelatedMovies = () => {
  return (
    <div className="related-movies mt-4">
      <h5>Related</h5>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        slidesPerView={6}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
      >
        {related_movies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedMovies;
