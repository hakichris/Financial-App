import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaHandPointRight } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';

const Company = ({
  companySymbol,
  id,
  reportedCurrency,
  calendarYear,
  netIncome,
}) => (
  <div id={`container${calendarYear}`} className="container">
    <div className="financialStatement">
      <p className="year">
        {' '}
        <DiApple color="white" />
        {' '}
        Reported year:
        {' '}
        {calendarYear}
      </p>
      <p>
        Company symbol:
        {' '}
        {companySymbol}
      </p>
      <p>
        Reported currency:
        {' '}
        {reportedCurrency}
      </p>
      <p>
        Net Income:
        {' '}
        {netIncome}
      </p>

      <NavLink
        className="checkLink"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
        to={`/details/${id}`}
      >
        Check Details
        {' '}
        <FaHandPointRight color="black" />
      </NavLink>
    </div>
  </div>
);

Company.propTypes = {
  companySymbol: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reportedCurrency: PropTypes.string.isRequired,
  calendarYear: PropTypes.string.isRequired,
  netIncome: PropTypes.number.isRequired,
};

export default Company;
