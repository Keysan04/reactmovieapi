import { useEffect, useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  // const [dMovie, setDMovie] = useState([]);

  const addToMovieList = (movie) => {
    const filteredArg = movieList.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setMovieList([...filteredArg, movie]);

    // setDMovie([...movieList, movie]);
  };

  const handleOnDelete = (id) => {
    const mov = movieList.filter(({ imdbID }) => imdbID !== id);
    setMovieList(mov);
    // setDMovie(mov);
  };

  // const moveFilter = (mode) => {
  //   if (!mode) {
  //     return setDMovie(movieList);
  //   }
  //   setDMovie(movieList.filter((itm) => itm.mode === mode));
  // };

  return (
    <div className="wrapper bg-dark text-warning min-vh-100">
      <div className="container">
        {/* title  */}
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center">My Movie Collections</h1>
          </div>
        </div>
        <hr />

        {/* search area  */}
        {/* => form  */}
        {/* => card  */}
        <SearchForm addToMovieList={addToMovieList} />

        {/* movie list section  */}
        {/* => buttons  */}
        {/* => cards */}
        <Display
          movieList={movieList}
          handleOnDelete={handleOnDelete}
          // moveFilter={moveFilter}
        />
      </div>
    </div>
  );
}

export default App;
