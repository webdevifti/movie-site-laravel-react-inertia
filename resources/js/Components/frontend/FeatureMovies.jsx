import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import featured_movies from "@/assets/featured_movies";
import MovieCard from "./MovieCard";


const FeatureMovies = () => {
  return (
    <div className="feature-movies">
      <h5>Featured</h5>
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
        {featured_movies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureMovies;
