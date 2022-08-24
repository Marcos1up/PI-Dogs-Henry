import React from "react";

export default function Pagination({ dogsPerPage, totalDogs, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <button onClick={() => paginate(number)} key={number}>
              {number}
            </button>
          );
        })}
      </ul>
    </nav>
  );
}
