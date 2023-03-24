import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter, Route, Routes } from 'react-router';
import CompanyFinancialDetails from '../pages/Details';
import financialstatsReducer from '../redux/CompanyFinancialSlice';

const preloadedState = {
  finance: {
    financialstats: [
      {
        companySymbol: 'hello',
        id: 'w123',
        finalLink: 'come one',
        reportedCurrency: 'okay',
        netIncome: 1235,
        revenue: 4567,
        calendarYear: 'alright',
        costOfRevenue: 3456,
        grossProfit: 3456,
      },
      {
        companySymbol: 'yeah',
        id: '123',
        finalLink: 'come one',
        reportedCurrency: 'okay',
        netIncome: 1235,
        revenue: 4567,
        calendarYear: 'alright',
        costOfRevenue: 3456,
        grossProfit: 3456,
      },
    ],
  },
};

const store = configureStore({
  reducer: {
    finance: financialstatsReducer,
  },
  preloadedState,
});

describe('CompanyFinancialDetails component', () => {
  it('renders CompanyFinancialDetails correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/details/123']}>
          <Routes>
            <Route path="details/:id" element={<CompanyFinancialDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/okay/i)).toBeDefined();
    expect(screen.getByText(/okay/i)).toBeDefined();
  });
});
