import React from "react";

export const CustomCard = ({ movie, func, deleteFun }) => {
  return (
    <div className="card " style={{ width: "18rem" }}>
      <img src={movie?.Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie?.Title}</h5>
        <p className="card-text">{movie?.Plot?.slice(0, 50)}...</p>

        {!movie.mode && (
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning" onClick={() => func("happy")}>
              Happy
            </button>
            <button className="btn btn-info" onClick={() => func("action")}>
              Action
            </button>
          </div>
        )}

        <div className="d-grid mt-2">
          <button className="btn btn-danger" onClick={deleteFun}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
