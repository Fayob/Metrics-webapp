/* eslint-disable max-len */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Heading from '../component/heading';
import DetailComponent from '../component/detailComponent';

import './DetailsPage.css';

const DetailsPage = () => {
  const { id: target } = useParams();
  const covidDatas = useSelector((state) => state.metrics);
  const targetCountry = covidDatas && covidDatas.covid19Data.find((data) => data.Country === target);

  return (
    <>
      <Navbar navHeading="Countries Covid19 Details" />
      <Heading name={target} confirmedCases={targetCountry && targetCountry.TotalCases} />
      <DetailComponent
        target={target}
        Population={targetCountry && targetCountry.Population}
        TotalRecovered={targetCountry && targetCountry.TotalRecovered}
        TotalTests={targetCountry && targetCountry.TotalTests}
        TotalCases={targetCountry && targetCountry.TotalCases}
        ActiveCases={targetCountry && targetCountry.ActiveCases}
        TotalDeaths={targetCountry && targetCountry.TotalDeaths}
      />
    </>
  );
};

export default DetailsPage;
