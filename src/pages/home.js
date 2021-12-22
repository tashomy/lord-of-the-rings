import React, { useEffect, useState } from "react";
import Lists from "../components/Lists";
import Showcase from "../components/Showcase";
import Header from "../components/Header";

const Home = () => {
  const [movies, setMovies] = useState();
  const [books, setBooks] = useState();

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer tXXcnBscxMooPo6b_dmu",
  };

  useEffect(() => {
    async function getMovies() {
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
    }
    async function getBooks() {
      const request = fetch("https://the-one-api.dev/v2/book")
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
          setBooks(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    getMovies();
    getBooks();
  }, []);

  if (movies === undefined) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (books === undefined) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div id="home-container">
        <Header></Header>
        <Showcase movies={movies} books={books}></Showcase>
      </div>
      <Lists movies={movies}></Lists>
    </>
  );
};
export default Home;
