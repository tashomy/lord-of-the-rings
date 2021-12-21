import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import Paginationing from "../components/Pagination";
import Quotes from "../components/Quotes";

const MovieDetails = () => {
  const [movies, setMovies] = useState();
  const [quote, setQuote] = useState();
  //   const [character, setCharacter] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(10);

  const [loading, setLoading] = useState(false);

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
    const fetchData = async () => {
      const rawQuotes = await fetch(
        "https://the-one-api.dev/v2/quote?limit=48",
        {
          headers: headers,
        }
      );
      const quotes = await rawQuotes.json();
      console.log(quotes);
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
      setQuote(quotes);
    };

    getMovies();
    fetchData();
  }, []);

  //   const indexOfLast = currentPage * quotesPerPage;
  //   const indexOfFirst = indexOfLast - quotesPerPage;
  //   const curr = quote.docs.slice(indexOfFirst, indexOfLast);

  //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (movies === undefined) {
    return null;
  }
  if (quote === undefined) {
    return null;
  }

  return (
    <>
      <div id="movie-details-container">
        <Header></Header>
        <MovieBox movies={movies.docs} loading={loading}></MovieBox>
      </div>
      <Quotes quotes={quote} loading={loading}></Quotes>
    </>
  );
};

export default MovieDetails;
