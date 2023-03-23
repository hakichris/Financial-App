import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFinancial } from '../redux/CompanyFinancialSlice';
import Company from '../components/singlecompany';
import Header from './Navbar';

const CompanyFinancial = () => {
  const { financialstats } = useSelector((state) => state.finance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinancial());
  }, [dispatch]);

  return (
    <>
      <Header />
      {financialstats.map((comp) => (
        <Company
          key={comp.id}
          id={comp.id}
          companySymbol={comp.companySymbol}
          reportedCurrency={comp.reportedCurrency}
          calendarYear={comp.calendarYear}
          netIncome={comp.netIncome}
        />
      ))}
    </>
  );
};

export default CompanyFinancial;
