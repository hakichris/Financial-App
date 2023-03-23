import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router';
import CompanyFinancial from '../pages/CompanyFinancial';
import financialstatsReducer from '../redux/CompanyFinancialSlice';

const preloadedState = {
  finance: {
    financialstats: [
      {
        companySymbol: 'hello',
        id: 'w123',
        reportedCurrency: 'okay',
        calendarYear: 'alright',
      },
      {
        companySymbol: 'yeah',
        id: '123',
        reportedCurrency: 'okay',
        calendarYear: 'cool',
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

describe('CompanyFinancial component', () => {
  it('renders CompanyFinancial correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <CompanyFinancial />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/alright/i)).toBeDefined();
    expect(screen.getByText(/cool/i)).toBeDefined();
  });
});
