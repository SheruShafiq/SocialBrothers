import React from "react";
import "../styles/Pagination.scss";
import Arrow from "../assets/arrowRight.svg";
const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul id="paginationList">
        {pageNumbers.map((number) => (
          <li key={number} id="paginationListItem">
            <a
              id="paginationListChildren"
              onClick={() => paginate(number)}
              href=""
            >
              {number}
            </a>
          </li>
        ))}
        <li id="paginationListItem">
          <a
            id="paginationListNextPageButton"
            onClick={() => paginate(number)}
            href=""
          >
            Volgende Pagina
          </a>
          <img src={Arrow} alt="RightArrow" id="rightArrow" />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
