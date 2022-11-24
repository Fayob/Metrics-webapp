import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
// We're using our own custom render function and not RTL's render.
import renderWithProviders from '../utils/utils';
import HomeComponent from '../component/home.component';

describe('test for Detail page component', () => {
  test('render Home Component page', () => {
    expect(renderWithProviders(
      <BrowserRouter>
        <HomeComponent covidCountry="Germany" covidTotalCases="12345" />
      </BrowserRouter>,
    )).toMatchSnapshot();
  });

  test('for Home Component props', () => {
    renderWithProviders(<BrowserRouter><HomeComponent covidCountry="Germany" covidTotalCases="12345" /></BrowserRouter>);

    expect(screen.queryByText(/Germany/i)).toBeVisible();
    expect(screen.queryByText(/12345/i)).toBeVisible();
  });
});
