import React from "react";

const CastsTabContent = (props) => {
  const movie_casts = props.casts;
  return (
    <div>
      <div className="d-flex align-items-start gap-2">
        <img src={movie_casts.director.img} alt="" />
        <div>
          <p>{movie_casts.director.name}</p>
          <p className="actor-role">{movie_casts.director.role}</p>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-start flex-wrap gap-2 mt-4">
        {
            movie_casts.actors.map((actor,index) => (
                <div key={index} className="d-flex align-items-start gap-2">
                <img src={actor.img} alt="" />
                <div>
                  <p>{actor.name}</p>
                  <p className="actor-role">{actor.movie_name}</p>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default CastsTabContent;
