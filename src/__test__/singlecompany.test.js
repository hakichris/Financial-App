import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Company from '../components/singlecompany';
import { MemoryRouter } from 'react-router';
import financialstatsReducer from '../redux/CompanyFinancialSlice';

const store = configureStore({
  reducer: {
    finance: financialstatsReducer,
  },
});

describe('Company', () => {
  test('renders Company and join/leave button', () => {
    const CompanyFinancial = {
      companySymbol: 'hello',
      id: 'w123',
      calendarYear: 'alright',
      reportedCurrency: 'okay',
    };
    render(
      <Provider store={store}>
        <MemoryRouter>
        <Company
          companySymbol={CompanyFinancial.companySymbol}
          id={CompanyFinancial.id}
          reportedCurrency={CompanyFinancial.reportedCurrency}
          calendarYear={CompanyFinancial.calendarYear}
        />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/alright/i)).toBeDefined();
  });
});
