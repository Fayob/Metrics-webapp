/* eslint-disable no-unneeded-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';

import './detailComponent.css';

const DetailComponent = ({
  target,
  Population, TotalCases, TotalRecovered, TotalDeaths, ActiveCases, TotalTests,
}) => (
  <section className="detail_section">
    <p className="detail_info">
      {`${target} covid19 detailed Information`}
    </p>
    <div className="detail_container">
      <div className="detail_paragraph">
        <p>Population:</p>
        <div>
          <span>{ Population }</span>
          <FiArrowRightCircle className="arrow_right" />
        </div>
      </div>
      <div className="detail_paragraph">
        <p>Total Cases:</p>
        <div>
          <span>{TotalCases}</span>
          <FiArrowRightCircle className="arrow_right" />

        </div>
      </div>
      <div className="detail_paragraph">
        <p>Total Recovery:</p>
        <div>
          <span>{TotalRecovered}</span>
          <FiArrowRightCircle className="arrow_right" />

        </div>
      </div>
      <div className="detail_paragraph">
        <p>Total Death:</p>
        <div>
          <span>{TotalDeaths}</span>
          <FiArrowRightCircle className="arrow_right" />
        </div>
      </div>
      <div className="detail_paragraph">
        <p>Active Cases:</p>
        <div>
          <span>{ActiveCases}</span>
          <FiArrowRightCircle className="arrow_right" />
        </div>
      </div>
      <div className="detail_paragraph">
        <p>Total Tests:</p>
        <div>
          <span>{TotalTests}</span>
          <FiArrowRightCircle className="arrow_right" />
        </div>
      </div>
    </div>
  </section>
);

DetailComponent.propTypes = {
  target: PropTypes.string.isRequired,
  Population: PropTypes.number.isRequired,
  TotalCases: PropTypes.number.isRequired,
  TotalTests: PropTypes.number.isRequired,
  TotalRecovered: PropTypes.number.isRequired,
  TotalDeaths: PropTypes.number.isRequired,
  ActiveCases: PropTypes.number.isRequired,
};

export default DetailComponent;
