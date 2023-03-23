import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaReply } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { GiCash } from 'react-icons/gi';

const CompanyDetails = ({
  companySymbol,
  finalLink,
  reportedCurrency,
  netIncome,
  revenue,
  calendarYear,
  costOfRevenue,
  grossProfit,
}) => (

  <div id={`container${calendarYear}`} className="container">
    <div className="Home">
      {' '}
      <NavLink
        className="nav-link"
        style={({ isActive }) => (isActive
          ? { textDecoration: 'underline' }
          : { textDecoration: 'none' })}
        to="/"
      >
        <FaReply color="white" />
      </NavLink>
      <div className="intro">
        <h1 className="name">
          {' '}
          <DiApple color="white" />
          {' '}
          {companySymbol}
          {' '}
        </h1>
        <p className="year">
          Apple Financial statement
          {calendarYear}
        </p>
        <p className="currency">
          Reported Currency:
          {reportedCurrency}
        </p>
      </div>
    </div>

    <div className="Details">
      <p>
        Net Income:
        {netIncome}
        {' '}
        <GiCash color="#0b4513" />
      </p>
      <p>
        Revenue:
        {revenue}
        {' '}
        <GiCash color="#0b4513" />
      </p>
      <p>
        Cost of Revenue:
        {costOfRevenue}
        {' '}
        <GiCash color="#0b4513" />
      </p>
      <p>
        GrossProfit:
        {grossProfit}
        {' '}
        <GiCash color="#0b4513" />
        {' '}
      </p>
      <a href={finalLink}>Check Link to this data</a>
    </div>
  </div>
);

CompanyDetails.propTypes = {
  companySymbol: PropTypes.string,
  reportedCurrency: PropTypes.string,
  calendarYear: PropTypes.string,
  finalLink: PropTypes.string,
  netIncome: PropTypes.number,
  revenue: PropTypes.number,
  costOfRevenue: PropTypes.number,
  grossProfit: PropTypes.number,
};

CompanyDetails.defaultProps = {
  companySymbol: 'dkfj',
  reportedCurrency: 'slfk',
  calendarYear: 'dfkn',
  finalLink: 'lfkng',
  netIncome: 235,
  revenue: 235,
  costOfRevenue: 234,
  grossProfit: 456,
};

export default CompanyDetails;
