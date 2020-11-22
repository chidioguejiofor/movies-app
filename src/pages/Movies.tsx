import React, { useEffect, useState } from "react";
import MoviePageLayout, { MovieType } from "components/layouts/MoviePageLayout";

import movies from "services/movies.json";

let allTheGenres: string[] = [];

movies.forEach((movie) => {
  const genre: string[] = movie.genre;

  allTheGenres = allTheGenres.concat(genre);
});

const UNIQUE_GENRES = Array.from(new Set(allTheGenres)).sort();

function Movies() {
  const [values, setValues] = useState({
    search: "",
    selectedGenre: "all",
  });

  const [timerId, setTimerId] = useState(0);

//   Debounce Logic
  useEffect(() => {

    if (timerId) {
      clearTimeout(timerId);
    }

    const newTimerID = +setTimeout(() => {
      if (!values.search && !values.selectedGenre) {
        setFilteredMovies(movies);
      }

      let newMovies = movies.filter((movie: MovieType) => {
        return !!movie.title.toLowerCase().match(values.search.toLowerCase());
      });

      if (values.selectedGenre !== "all") {
        newMovies = newMovies.filter((movie: MovieType) => {
          return movie.genre.find(
            (movieGenre) => movieGenre === values.selectedGenre
          );
        });
      }

      setFilteredMovies(newMovies);
    }, 600);

    setTimerId(newTimerID);
  }, [values]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [filteredMovies, setFilteredMovies] = useState(movies);

  return (
    <MoviePageLayout
      data={filteredMovies}
      uniqueGenres={UNIQUE_GENRES}
      onValueChange={handleChange}
      values={values}
    />
  );
}

export default Movies;
