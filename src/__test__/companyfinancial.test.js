import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
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
        calendarYear: 'alright',
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
    const { getByText } = render(
      <Provider store={store}>
        <CompanyFinancial />
      </Provider>,
    );

    expect(getByText('alright')).toBeInTheDocument();
    expect(getByText('alright')).toBeInTheDocument();
  });
});
