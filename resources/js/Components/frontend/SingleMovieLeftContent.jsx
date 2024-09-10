import { Link } from "@inertiajs/react";
import React,{useState} from "react";
import InfoTabContent from "./InfoTabContent";
import TrailerTabContent from "./TrailerTabContent";
import LinksTabContent from "./LinksTabContent";
import CastsTabContent from "./CastsTabContent";
import RelatedMovies from "./RelatedMovies";
const SingleMovieLeftContent = (props) => {
  const movie = props.movieContent.movie;
  const genres = props.movieContent.genres;
  const related_movies = props.related_movies

  const [activeTab, setActiveTab] = useState("info");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  

  return (
    <div className="col-lg-9">
      <div className="single-movie-content">
        <div className="top">
          <img src={`/storage/uploads/movies/posters/${movie.poster}`} alt={movie.title} />
          <div>
            <h3>{movie.title}</h3>
            <div className="d-flex align-items-center gap-2">
              <p className="year">{movie.releasing_year}</p>
              <Link
                href={`/category/${movie.category.slug}`}
                className="category"
              >
                {movie.category.name}
              </Link>
            </div>
            <div className="genres">
              {genres.map((genre, i) => (
                <Link href={`/genre/${genre.slug}`} className="genre" key={i}>
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="movie-content-tab">
          <button
            onClick={() => handleTabChange("info")}
            className={activeTab === "info" ? "active" : ""}
          >
            Info
          </button>
          <button
            onClick={() => handleTabChange("trailer")}
            className={activeTab === "trailer" ? "active" : ""}
          >
            Trailer
          </button>
          <button
            onClick={() => handleTabChange("links")}
            className={activeTab === "links" ? "active" : ""}
          >
            Links
          </button>
          <button
            onClick={() => handleTabChange("casts")}
            className={activeTab === "casts" ? "active" : ""}
          >
            Casts
          </button>
        </div>
        <div className="tab-components">
          <div className="movie-info-component-items">
             {activeTab === "info" && <InfoTabContent description={movie.info_description} />}
            {activeTab === "trailer" && <TrailerTabContent trailerUrl={movie.trailer_url} />}
            {activeTab === "links" && <LinksTabContent links={movie.movies_links} />}
            {activeTab === "casts" && <CastsTabContent casts={movie.movies_casts} />}
          </div>
        </div>

       <RelatedMovies related_movies={related_movies} />
      </div>
    </div>
  );
};

export default SingleMovieLeftContent;
