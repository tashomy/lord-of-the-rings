import React from "react";
import { Link } from "react-router-dom";

const Paginationing = ({ moviesPerPage, totalMovies, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{ width: "100px" }}>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={(e) => {
                paginate(number);
                e.preventDefault();
                console.log("radim na click", { number });
              }}
              href="!#"
              className="page-link"
              style={{ width: "20px" }}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginationing;
