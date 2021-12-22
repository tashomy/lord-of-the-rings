import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieLists from "../components/MovieLists";
import Pagination from "../components/Pagination";
const MovieList = () => {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(2);

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };

  useEffect(() => {
    async function getMovies() {
      const request = fetch("https://the-one-api.dev/v2/movie?sort=name:asc", {
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
  const indexOfLast = currentPage * moviesPerPage;
  const indexOfFirst = indexOfLast - moviesPerPage;
  const curr = movies.docs.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="movie-lists-container">
      <Header></Header>
      <MovieLists movies={curr} loading={loading}></MovieLists>

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.total}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default MovieList;
