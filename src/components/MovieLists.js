import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const MovieLists = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  //if (movies === undefined) return null;
  return (
    <div className="wrap-movie-boxes">
      {movies.map((item, index) => {
        return (
          <div key={index} id={index} className="movie-box">
            <ul className=" mb-4">
              <h4>{item.name}</h4>
              <li>Runtime: {item.runtimeInMinutes}</li>
              <li>Rotten Tomatoes Score: {item.rottenTomatoesScore}</li>
              <hr></hr>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MovieLists;
