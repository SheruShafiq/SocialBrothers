import React from "react";
import "../styles/Pagination.scss";
import Arrow from "../assets/arrowRight.svg";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  currentPage,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(currentPage);

  return (
    <nav>
      <ul id="paginationList">
        {pageNumbers.map((number) => (
          <li
            key={number}
            id="paginationListItem"
            className={currentPage == number ? "activePage" : "notActivePage"}
          >
            <button
              id="paginationListChildren"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}

        <li id="paginationListItem">
          <button
            id="paginationListNextPageButton"
            onClick={() => paginate(currentPage + 1)}
          >
            Volgende Pagina
          </button>
          <img src={Arrow} alt="RightArrow" id="rightArrow" />
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
