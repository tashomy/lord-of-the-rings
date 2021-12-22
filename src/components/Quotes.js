import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Quotes = ({ quotes, characters, movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const findChar = (arg) => {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i]._id == arg) {
        return characters[i].name;
      }
    }
  };
  const findMovie = (arg) => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i]._id == arg) {
        return movies[i].name;
      }
    }
  };

  return (
    <div className="wrap-movie-quotes">
      {quotes.map((item, index) => {
        return (
          <Card key={index} className="card-details" id="card-border">
            <Card.Body className="card-body">
              <Card.Text>
                Quote: {item.dialog}
                <br></br>
                <br></br>
                Movie: {findMovie(item.movie)}
                <br></br>
                <br></br>
                Character: {findChar(item.character)}
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Quotes;
