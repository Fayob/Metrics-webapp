import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Heading from '../component/heading';
import Dropdown from '../component/Dropdown';
import Home from './Home';
import './HomePage.css';

const HomePage = () => {
  const [filter, setFilter] = useState('');

  const { worldCovid } = useSelector((state) => state.metrics);

  const onChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Navbar navHeading="Total Cases" />
      <main className="main_container">
        <Heading name="global total cases" confirmedCases={(worldCovid.length > 0) ? worldCovid[0].TotalCases : 0} />
        <Dropdown onChangeHandler={onChangeHandler} />
        <Home filter={filter} />
      </main>
    </>
  );
};

export default HomePage;
