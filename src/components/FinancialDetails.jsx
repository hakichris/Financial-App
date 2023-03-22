import React from 'react';
import { NavLink } from 'react-router-dom';

const CompanyDetails = ({companySymbol,
    finalLink,
    reportedCurrency,
    netIncome,
    revenue,
    calendarYear,
    costOfRevenue,
    grossProfit, }) => {
return (
 
    <div className='container'>
        <div className="Home"> <NavLink
            className="nav-link"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
            to="/"
          >
            Back Home
          </NavLink></div>
       <div> 
        <h1 className="name">{companySymbol}</h1>
        <p className="year">{calendarYear}</p>
        <p className="currency">Reported Currency: {reportedCurrency}</p>
       </div>
       <div className='Details'>
       <p>Net Income: {netIncome}</p>
       <p>Revenue: {revenue}</p>
       <p>Cost of Revenue: {costOfRevenue}</p>
       <p>GrossProfit: {grossProfit}</p>
       <a href={finalLink}>Check Link to this data</a>
       </div>
    </div>
)}
 
export default CompanyDetails ;