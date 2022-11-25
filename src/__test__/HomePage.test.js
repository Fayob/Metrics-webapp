import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
// We're using our own custom render function and not RTL's render.
import renderWithProviders from '../utils/utils';
import HomePage from '../pages/HomePage';
// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
const handlers = [
  rest.get('api/metrics', (req, res, ctx) => res(ctx.json({
    isLoading: false,
    covid19Data: [{ Country: 'Nigeria', TotalCases: 123 }, { Country: 'UK', TotalCases: 456 }, { Country: 'Germany', TotalCases: 789 }, { Country: 'Canada', TotalCases: 245 }, { Country: 'USA', TotalCases: 123 }],
  }), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('test redux and Homepage component', () => {
  test('render HomePage', () => {
    expect(renderWithProviders(<BrowserRouter><HomePage /></BrowserRouter>)).toMatchSnapshot();
  });
  test('fetches & receives a user after clicking the fetch user button', async () => {
    renderWithProviders(<BrowserRouter><HomePage /></BrowserRouter>);
    expect(screen.queryByText(/Africa/i)).toBeVisible();
    expect(screen.queryByText(/Asia/i)).toBeVisible();
    expect(screen.queryByText(/Europe/i)).toBeVisible();
  });
});
