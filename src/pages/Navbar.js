import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings, FiMic } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import PropType from 'prop-types';
import './Navbar.css';

const Navbar = ({ navHeading }) => (
  <nav className="navbar_container">
    <Link to="/" className="arrow_back">
      <IoIosArrowBack />
    </Link>
    <div>
      <p>{ navHeading }</p>
    </div>
    <div className="mic_setting">
      <div className="mic"><FiMic /></div>
      <div className="settings"><FiSettings /></div>
    </div>
  </nav>
);

Navbar.propTypes = {
  navHeading: PropType.string.isRequired,
};

export default Navbar;
