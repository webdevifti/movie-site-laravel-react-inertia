import React from "react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "./MovieCard";


const FeatureMovies = ({movies}) => {
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
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureMovies;
