/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import HomeComponent from '../component/home.component';
import Loading from '../component/Loading';
import Pagination from '../component/pagination';
import { covidData, globalData } from '../redux/metrics/metricsSlice';

const Home = ({ filter }) => {
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(20);
  const dispatch = useDispatch();
  const { covid19Data, isLoading } = useSelector((state) => state.metrics);

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

  // change pageNumber
  const paginate = (pageNumber) => setPage(pageNumber);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="home_page_list">
        {currentPage && currentPage.map((covid) => (
          <HomeComponent key={covid.Country} covidCountry={covid.Country} covidTotalCases={covid.TotalCases} />
        ))}
      </div>
      <Pagination postPerPage={postPerPage} numberOfPosts={covid19Data && covid19Data.length} paginate={paginate} />
    </>
  );
};

Home.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Home;
