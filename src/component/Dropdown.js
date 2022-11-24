import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ onChangeHandler }) => (
  <select onChange={onChangeHandler} className="select">
    <option value="" className="option">All Continent</option>
    <option value="africa" className="option"> Africa </option>
    <option value="asia" className="option"> Asia </option>
    <option value="europe" className="option"> Europe </option>
    <option value="northamerica" className="option"> North America </option>
    <option value="southamerica" className="option"> South America </option>
    <option value="australia" className="option"> Australian and Oceanian </option>
  </select>
);

Dropdown.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
};

export default Dropdown;
