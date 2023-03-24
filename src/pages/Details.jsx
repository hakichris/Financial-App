import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getFinancial } from '../redux/CompanyFinancialSlice';
import CompanyDetails from '../components/FinancialDetails';

const CompanyFinancialDetails = () => {
  const { financialstats } = useSelector((state) => state.finance);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinancial());
  }, [dispatch]);

  const { id } = useParams();
  const financialstat = financialstats.find((comp) => comp.id === id);

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
