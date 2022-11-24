import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
// We're using our own custom render function and not RTL's render.
import renderWithProviders from '../utils/utils';
import DetailsPage from '../pages/DetailsPage';

describe('test for Detail page component', () => {
  test('render Detail page', () => {
    expect(renderWithProviders(<BrowserRouter><DetailsPage /></BrowserRouter>)).toMatchSnapshot();
  });
});
