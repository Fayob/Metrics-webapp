import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi';

const HomeComponent = ({ covidCountry, covidTotalCases }) => (
  <Link to={`/details/${covidCountry}`} className="home_page">
    <FiArrowRightCircle className="arrow_right" />
    <div>
      <h2>{covidCountry}</h2>
      <p>{ covidTotalCases }</p>
    </div>

  </Link>
);

HomeComponent.propTypes = {
  covidCountry: PropTypes.string.isRequired,
  covidTotalCases: PropTypes.number.isRequired,
};

export default HomeComponent;
