/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../component/heading';
import Pagination from '../component/pagination';
import { covidData, globalData } from '../redux/metrics/metricsSlice';
import Navbar from './Navbar';

import './HomePage.css';
import HomeComponent from '../component/home.component';
import Dropdown from '../component/Dropdown';

const HomePage = () => {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(20);
  const dispatch = useDispatch();
  const { covid19Data, worldCovid } = useSelector((state) => state.metrics);

  useEffect(() => {
    if (filter === '') {
      dispatch(covidData('countries'));
      setPage(1);
    } else {
      dispatch(covidData(filter));
      setPage(1);
    }
  }, [filter]);

  useEffect(() => {
    dispatch(globalData());
  }, []);

  // Pagination
  const maxIndex = page * postPerPage;
  const minIndex = maxIndex - postPerPage;
  const currentPage = covid19Data && covid19Data.slice(minIndex, maxIndex);

  const onChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  // change pageNumber
  const paginate = (pageNumber) => setPage(pageNumber);

  return (
    <>
      <Navbar navHeading="Total Cases" />
      <main className="main_container">
        <Heading name="global total cases" confirmedCases={(worldCovid.length > 0) ? worldCovid[0].TotalCases : 0} />
        <Dropdown onChangeHandler={onChangeHandler} />
        <div className="home_page_list">
          {currentPage && currentPage.map((covid) => (
            <HomeComponent key={covid.Country} covidCountry={covid.Country} covidTotalCases={covid.TotalCases} />
          ))}
        </div>
        <Pagination postPerPage={postPerPage} numberOfPosts={covid19Data && covid19Data.length} paginate={paginate} />
      </main>
    </>
  );
};

export default HomePage;
