import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeComponent = ({ covidCountry, covidTotalCases }) => (
  <div className="home_page">
    <h4>
      <Link to={`/test/${covidCountry}`}>{covidCountry}</Link>
    </h4>
    <p>{ covidTotalCases }</p>
  </div>
);

HomeComponent.propTypes = {
  covidCountry: PropTypes.string.isRequired,
  covidTotalCases: PropTypes.number.isRequired,
};

export default HomeComponent;
