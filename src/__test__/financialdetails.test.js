import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router';
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
        <MemoryRouter>
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
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/1235/i)).toBeDefined();
    expect(screen.getByText(/4567/i)).toBeDefined();
  });
});
