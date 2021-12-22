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
      });
      const response = await request;
      const parsed = await response.json();
      setMovies(parsed);
    }
    async function getBooks() {
      const request = fetch("https://the-one-api.dev/v2/book");
      const response = await request;
      const parsed = await response.json();
      setBooks(parsed);
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
