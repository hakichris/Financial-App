import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFinancial } from '../redux/CompanyFinancialSlice';
import Company from '../components/singlecompany';

const CompanyFinancial = () => {
  const { financialstats } = useSelector((state) => state.finance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinancial());
  }, [dispatch]);

  return (
    <>
      {financialstats.map((comp) => (
        <Company
          key={comp.id}
          id={comp.id}
          companySymbol={comp.companySymbol}
          finalLink={comp.finalLink}
          reportedCurrency={comp.reportedCurrency}
          netIncome={comp.netIncome}
          revenue={comp.revenue}
          calendarYear={comp.calendarYear}
          costOfRevenue={comp.costOfRevenue}
          grossProfit={comp.grossProfit}
        />
      ))}
    </>
  );
};

export default CompanyFinancial;
