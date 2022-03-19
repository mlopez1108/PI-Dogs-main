import React from "react";
import PaginationCSS from "./styles.module.css";

const Pagination = ({ allDogs, dogsPerPage, paginado }) => {
  const pageNumbers = [];
  const result = Math.ceil(allDogs / dogsPerPage);

  for (let i = 1; i <= result; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={PaginationCSS.pagination}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className={PaginationCSS.number} key={number}>
              <a onClick={() => paginado(number)} href={`#${number}`}>
                {number}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
