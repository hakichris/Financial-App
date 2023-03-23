import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CompanyDetails from '../components/FinancialDetails';

import financialstatsReducer from '../redux/CompanyFinancialSlice';

const store = configureStore({
  reducer: {
    finance: financialstatsReducer,
  },
});

describe('companydetails', () => {
  test('renders companydetails and join/leave button', () => {
    const CompanyFinancial = {
      companySymbol: 'hello',
      id: 'w123',
      finalLink: 'come one',
      reportedCurrency: 'okay',
      netIncome: 1235,
      revenue: 4567,
      calendarYear: 'alright',
      costOfRevenue: 3456,
      grossProfit: 3456,
    };
    render(
      <Provider store={store}>
        <CompanyDetails
          companySymbol={CompanyFinancial.companySymbol}
          id={CompanyFinancial.id}
          finalLink={CompanyFinancial.finalLink}
          reportedCurrency={CompanyFinancial.reportedCurrency}
          netIncome={CompanyFinancial.netIncome}
          revenue={CompanyFinancial.revenue}
          calendarYear={CompanyFinancial.calendarYear}
          costOfRevenue={CompanyFinancial.costOfRevenue}
          grossProfit={CompanyFinancial.grossProfit}
        />
      </Provider>,
    );

    expect(screen.getByText(CompanyFinancial.netIncome)).toBeInTheDocument();
    expect(screen.getByText(CompanyFinancial.revenue)).toBeInTheDocument();
  });
});
