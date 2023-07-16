import React from "react";
import "../styles/Pagination.scss";
import Arrow from "../assets/arrowRight.svg";

interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPosts,
  postsPerPage,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = pageNumbers[pageNumbers.length - 1] + 1;

  return (
    <nav>
      <ul id="paginationList">
        {pageNumbers.map((number) => (
          <li key={number} id="paginationListItem">
            <a
              id="paginationListChildren"
              onClick={() => paginate(number)}
              href="#"
            >
              {number}
            </a>
          </li>
        ))}
        <li id="paginationListItem">
          <a
            id="paginationListNextPageButton"
            onClick={() => paginate(nextPage)}
            href="#"
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
