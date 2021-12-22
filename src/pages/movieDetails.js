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
      setLoading(true);
      const request = fetch("https://the-one-api.dev/v2/movie", {
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status == 429) {
            throw new Error(
              "Server is overwhelmed right now, give it a minute"
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setMovies(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });

      setLoading(false);
    }
    const fetchData = async () => {
      const rawQuotes = await fetch(
        "https://the-one-api.dev/v2/quote?limit=64",
        {
          headers: headers,
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status == 429) {
            throw new Error(
              "Server is overwhelmed right now, give it a minute"
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setQuote(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });

      const rawCharacters = await fetch(
        "https://the-one-api.dev/v2/character",
        { headers: headers }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status == 429) {
            throw new Error(
              "Server is overwhelmed right now, give it a minute"
            );
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then((responseJson) => {
          setCharacter(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
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
