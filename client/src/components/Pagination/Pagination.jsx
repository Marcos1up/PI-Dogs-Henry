import React from "react";

export default function Pagination({ dogsPerPage, dogs, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(dogs / dogsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul>
        {
          pageNumber?.map(number => (

            <button key={number} onClick={() => paginate(number)}>{number}</button>

          ))
        }
      </ul>
    </nav>
  );
}
