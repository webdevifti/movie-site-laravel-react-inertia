import React from "react";

const CastsTabContent = ({casts}) => {
  const casts_all = JSON.parse(casts);
  
  return (
    <div>
      <div className="d-flex align-items-center justify-content-start flex-wrap gap-2 mt-4">
        {
            casts_all.map((actor,index) => (
                <div key={index} className="d-flex align-items-start gap-2">
                <img src={`/storage/uploads/movies/casts/${actor.img}`} alt="" />
                <div>
                  <p className="actor-role">{actor.role}</p>
                  <p>Name:{actor.name}</p>
                  <p className="actor-role">Charcter: {actor.character}</p>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default CastsTabContent;
