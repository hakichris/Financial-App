import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BiRightArrowCircle } from 'react-icons/bi';
import { DiApple } from 'react-icons/di';

const Company = ({
  companySymbol,
  id,
  reportedCurrency,
  calendarYear,
  netIncome,
}) => (
  <div id={`container${calendarYear}`} className="container">
    <NavLink
      className="checkLink"
      style={({ isActive }) => (isActive
        ? { textDecoration: 'underline' }
        : { textDecoration: 'none' })}
      to={`/details/${id}`}
    >
      <BiRightArrowCircle color="white" className="arrow" />
      <p className="year">
        {' '}
        <DiApple color="white" />
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
      {' '}
    </NavLink>
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
