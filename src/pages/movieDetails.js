import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";

const MovieDetails = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  console.log(movies);
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };

  useEffect(() => {
    async function getMovies() {
      const request = fetch("https://the-one-api.dev/v2/movie", {
        headers: headers,
      });
      setLoading(true);
      const response = await request;
      const parsed = await response.json();
      setMovies(parsed);
      setLoading(false);
    }

    getMovies();
  }, []);

  if (movies === undefined) {
    return null;
  }

  return (
    <div id="movie-details-container">
      <Header></Header>
      <MovieBox movies={movies.docs} loading={loading}></MovieBox>
    </div>
  );
};

export default MovieDetails;
