import React from 'react';
import PropTypes from 'prop-types';

import './heading.css';

const Heading = ({ name, confirmedCases }) => (
  <div className="heading">
    <h2 className="heading_name">{`${name && name} : `}</h2>
    <p>
      {confirmedCases && confirmedCases}
    </p>
  </div>
);

Heading.propTypes = {
  name: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default Heading;
