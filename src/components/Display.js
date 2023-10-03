import React, { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard";

export const Display = ({ movieList, handleOnDelete }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const moveFilter = (mode) => {
    if (!mode) {
      return setDisplayMovie(movieList);
    }

    const filteredMovie = movieList.filter((movie) => movie.mode === mode);

    setDisplayMovie(filteredMovie);
  };
  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5 ">
      <div className="row">
        <div className="col">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => moveFilter("")}
            >
              All
            </button>
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => moveFilter("happy")}
            >
              Happy
            </button>
            <button
              type="button"
              class="btn btn-info"
              onClick={() => moveFilter("action")}
            >
              Action
            </button>
          </div>
          <div className="mt-3">{displayMovie.length} movies found!</div>
          <hr />
        </div>
      </div>

      <div className="row">
        <div className="col d-flex flex-wrap gap-3 justify-content-between">
          {displayMovie.map((itme, i) => (
            <CustomCard
              key={i}
              movie={itme}
              deleteFun={() => handleOnDelete(itme.imdbID)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
