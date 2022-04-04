import React from "react";
import { NavLink } from "react-router-dom";

const Paging = ({ candiPerPage, totalCandis, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCandis / candiPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="nav-paging">
      <ul className="paging paging-sm">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <NavLink onClick={() => paginate(number)} to="" className="page-link">
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Paging;
