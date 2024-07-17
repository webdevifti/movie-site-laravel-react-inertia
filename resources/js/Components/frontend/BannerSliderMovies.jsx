import React from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner_slider_movies from "@/assets/banner_slider_movies";
import { Link } from "@inertiajs/react";

const BannerSliderMovies = () => {
  return (
    <div className="banner-slider-movies">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={2}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {banner_slider_movies.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slider-image">
              <Link href={`/movie/${item.slug}`}>
                <img src={item.poster} alt={item.title} />
              </Link>
            </div>
            <div className="slider-content-meta">
              <p className="movie-name">
                <Link href={`/movie/${item.slug}`}>{item.title}</Link>
              </p>
              <p className="releasing-year">{item.releasing_year}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSliderMovies;
