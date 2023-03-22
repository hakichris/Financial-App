import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFinancial } from '../redux/CompanyFinancialSlice';
import CompanyDetails from '../components/FinancialDetails';
import { useParams } from 'react-router';

const CompanyFinancialDetails = () => {
  const { financialstats } = useSelector((state) => state.finance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinancial());
  }, [dispatch]);

  const { id } = useParams();
  const financialstat = financialstats.find((comp) => {
    return comp.id === id;
  });

  return (
    <>
      <CompanyDetails
        key={financialstat?.id}
        companySymbol={financialstat?.companySymbol}
        finalLink={financialstat?.finalLink}
        reportedCurrency={financialstat?.reportedCurrency}
        netIncome={financialstat?.netIncome}
        revenue={financialstat?.revenue}
        calendarYear={financialstat?.calendarYear}
        costOfRevenue={financialstat?.costOfRevenue}
        grossProfit={financialstat?.grossProfit}
      />
    </>
  );
};

export default CompanyFinancialDetails;
