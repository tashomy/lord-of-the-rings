import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import towers from "../images/2towers.jpg";
import fellow from "../images/fellow2.jpg";
import returnKing from "../images/return2.jpg";
import unexpected from "../images/unexpected.jpg";
import desolation from "../images/desolation.jpg";
import battle from "../images/battle.jpg";
import rings from "../images/fellow.jpg";
import hobbit from "../images/showcase1.jpg";

const MovieBox = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const images = [
    { id: 0, src: rings },
    { id: 1, src: hobbit },
    { id: 5, src: unexpected },
    { id: 6, src: desolation },
    { id: 7, src: battle },
    { id: 2, src: towers },
    { id: 3, src: fellow },
    { id: 4, src: returnKing },
  ];

  const templates = {
    template1: { items: movies },
    template2: { items: images },
  };

  console.log(rings);

  return (
    <div className="wrap-movie-details">
      {movies.map((item, index) => {
        return (
          <Card key={index} className="card-details">
            <Card.Img
              variant="top"
              key={images.at(index).id}
              src={images.at(index).src}
            />

            {console.log(images[index])}
            <Card.Body className="card-body">
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Runtime in minutes: {item.runtimeInMinutes} <br></br>
                Budget in millions: {item.budgetInMillions} <br></br>
                Revenue in millions: {item.boxOfficeRevenueInMillions} <br></br>
                Score: {item.rottenTomatoesScore} <br></br>
                Award nominations: {item.academyAwardNominations} <br></br>{" "}
                Award wins: {item.academyAwardWins} <br></br>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default MovieBox;
