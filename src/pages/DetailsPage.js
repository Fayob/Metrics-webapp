import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Heading from '../component/heading';

const DetailsPage = () => {
  const { id: target } = useParams();
  const covidData = useSelector((state) => state.metrics);
  const targetCountry = covidData.covid19Data.find((data) => data.Country === target);

  return (
    <>
      <Navbar navHeading="Countries Covid19 Details" />
      <Heading name={target} confirmedCases={targetCountry.TotalCases} />
      <section>
        <p>
          {`${target} covid19 detailed Information`}
        </p>
        <div>
          <p>
            {`Population: ${targetCountry.Population}`}
          </p>
          <p>
            {`Total Cases: ${targetCountry.TotalCases}`}
          </p>
          <p>
            {`Total Recovery: ${targetCountry.TotalRecovered}`}
          </p>
          <p>
            {`Total Death: ${targetCountry.TotalDeaths}`}
          </p>
          <p>
            {`Active Cases: ${targetCountry.ActiveCases}`}
          </p>
          <p>
            {`Total Tests: ${targetCountry.TotalTests}`}
          </p>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
