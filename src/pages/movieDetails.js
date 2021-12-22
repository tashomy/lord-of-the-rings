import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieBox from "../components/MovieBox";
import Pagination from "../components/Pagination";
import Quotes from "../components/Quotes";
import QuoteViews from "../components/QuoteViews";

const MovieDetails = () => {
  const [movies, setMovies] = useState();
  const [quote, setQuote] = useState([]);
  const [character, setCharacter] = useState();
  const [currentPage, setCurrentPage] = useState(2);
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
        "https://the-one-api.dev/v2/quote?limit=64",
        {
          headers: headers,
        }
      );
      const quotes = await rawQuotes.json();
      console.log(quotes);
      const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];

      setQuote(quotes);
      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character",
        { headers: headers }
      );
      const characters = await rawCharacters.json();
      console.log(characters);
      const character = characters.docs[0];
      setCharacter(characters);
    };

    getMovies();
    fetchData();
  }, []);

  if (movies === undefined) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (quote === undefined) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (character === undefined) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div id="movie-details-container">
        <Header></Header>
        <MovieBox movies={movies.docs} loading={loading}></MovieBox>
      </div>
      {/* U QuoteViews komponenti sam pokusala na vise nacina da implementiram pretragu citata medjutim uporno nisam dobijala listu svih citata jednog karaktera. U komponenti su ostala dva pokusaja implementacije */}
      {/* <QuoteViews
        characters={character.docs}
        quotes={quote.docs}
        loading={loading}
      ></QuoteViews> */}

      <Quotes
        quotes={quote.docs}
        characters={character.docs}
        movies={movies.docs}
        loading={loading}
      ></Quotes>
    </>
  );
};

export default MovieDetails;
