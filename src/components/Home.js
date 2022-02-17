import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

function Home() {
  const [movies, setMovies] = useState([]); // because the data is NOT static and it's changing all the time
  // initially it's an empty array because if i didnt make any request it will be empty

  async function getMovies() {
    let response = await fetch(`${process.env.REACT_APP_SERVER}/trending`);
    let moviesData = await response.json();
    setMovies(moviesData); // i update movies variable with setMovies state and pass moviesData to the variable that had the empty array intially
  }

  function updateMovies(newMovie, id) {
    let updatedMovie = movies.map(movie => {
        if (movie.id === id) {
            movie.comment = newMovie.comment;
            return movie;
        } else {
            return movie;
        }
    })
    setMovies(updatedMovie);
}

  useEffect(() => {
    getMovies();
  }, []); // it will only render once when the component mounts because of the empty[]

  return (
    <>
      <h1>this is Home</h1>
      {movies && <MovieList movies={movies} updateMovies={updateMovies} />}
    </>
  );
}

export default Home;
