import React from "react";

const Showcase = (props) => {
  return (
    <div className="container" id="showcase">
      <div className="left">
        <p>{props.books.total}</p>
        <h1>Available books</h1>
      </div>
      <div className="right">
        <p>{props.movies.total}</p>
        <h1>Available movies</h1>
      </div>
    </div>
  );
};

export default Showcase;
