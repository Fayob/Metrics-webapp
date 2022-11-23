/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../component/heading';
import Loading from '../component/Loading';
import Pagination from '../component/pagination';
import { covidData, globalData, setIsLoading } from '../redux/metrics/metricsRedux';
import Navbar from './Navbar';

import './HomePage.css';
import HomeComponent from '../component/home.component';

const HomePage = () => {
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(20);
  const dispatch = useDispatch();
  const { covid19Data, isLoading, worldCovid } = useSelector((state) => state.metrics);

  useEffect(() => {
    if (filter === '') {
      dispatch(setIsLoading(true));
      dispatch(covidData('countries'));
      setPage(1);
      dispatch(setIsLoading(false));
    } else {
      dispatch(setIsLoading(true));
      dispatch(covidData(filter));
      setPage(1);
      dispatch(setIsLoading(false));
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar navHeading="total cases" />
      <main className="main_container">
        <Heading name="global" confirmedCases={(worldCovid.length > 0) ? worldCovid[0].TotalCases : 0} />
        <select onChange={onChangeHandler}>
          <option value="">All Continent</option>
          <option value="africa"> Africa </option>
          <option value="asia"> Asia </option>
          <option value="europe"> Europe </option>
          <option value="northamerica"> North America </option>
          <option value="southamerica"> South America </option>
          <option value="australia"> Australian and Oceanian </option>
        </select>
        {currentPage && currentPage.map((covid) => (
          <HomeComponent key={covid.Country} covidCountry={covid.Country} covidTotalCases={covid.TotalCases} />
        ))}
        <Pagination postPerPage={postPerPage} numberOfPosts={covid19Data && covid19Data.length} paginate={paginate} />
      </main>
    </>
  );
};

export default HomePage;
