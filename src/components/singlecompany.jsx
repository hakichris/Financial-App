import React from 'react';
import { NavLink } from 'react-router-dom';

const Company = ({companySymbol,
    id,
    reportedCurrency,
    calendarYear}) => {
return (
    <div className='container'>
       <div className="financialStatement">
       <p className="year"> Reported year: {calendarYear}</p>
       <p>Company symbol: {companySymbol}</p>
       <p>Reported currency: {reportedCurrency}</p>
       <button className="detailbutton"> <NavLink
            className="nav-link"
            style={({ isActive }) => (isActive
              ? { textDecoration: 'underline' }
              : { textDecoration: 'none' })}
            to={`/details/${id}`}>
           Check Details
          </NavLink></button>
          </div>
    </div>
)}
 
export default Company ;