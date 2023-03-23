import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
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
    const { getByText } = render(
      <Provider store={store}>
        <CompanyFinancialDetails />
      </Provider>,
    );

    expect(getByText('alright')).toBeInTheDocument();
    expect(getByText('alright')).toBeInTheDocument();
  });
});
