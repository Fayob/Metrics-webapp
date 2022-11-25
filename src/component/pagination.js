/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

import './pagination.css';

const Pagination = ({ postPerPage, numberOfPosts, paginate }) => {
  const pageNumber = [];
  const numberOfPages = Math.ceil(numberOfPosts / postPerPage);

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumber.push(i);
  }

  return (
    <ul className="page_lists">
      {pageNumber && pageNumber.map((number) => (
        <li key={number} className="page_list">
          <button
            type="button"
            onClick={() => paginate(number)}
            className="btn"
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  postPerPage: PropTypes.number.isRequired,
  numberOfPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
