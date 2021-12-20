import React from "react";

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
              }}
              href="!#"
              className="page-link"
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
