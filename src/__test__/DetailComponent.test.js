import React from 'react';
// import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
// We're using our own custom render function and not RTL's render.
import renderWithProviders from '../utils/utils';
import DetailComponent from '../component/detailComponent';

describe('test for Detail page component', () => {
  test('render Detail Component', () => {
    expect(renderWithProviders(
      <BrowserRouter>
        <DetailComponent
          target="USA"
          Population="12345"
          TotalCases="6789"
          TotalRecovered="456"
          TotalDeaths="12"
          ActiveCases="45"
          TotalTests="123456"
        />
      </BrowserRouter>,
    )).toMatchSnapshot();
  });
});
