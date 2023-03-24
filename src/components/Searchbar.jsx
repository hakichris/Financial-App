import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFinancial, filterCalendar, updateSearch } from '../redux/CompanyFinancialSlice';

const SearchComponent = () => {
  const { searchParameters } = useSelector((state) => state.finance);
  const dispatch = useDispatch();
  const search = useRef(null);

  useEffect(() => {
    if (!searchParameters) {
      dispatch(getFinancial());
    } else {
      dispatch(filterCalendar(searchParameters));
    }
  }, [searchParameters, dispatch]);

  useEffect(() => {
    search.current.focus();
  }, []);

  return (

    <div className="searchBar">
      <input
        value={searchParameters}
        ref={search}
        type="text"
        placeholder="Search Year ex: 2022"
        onChange={(e) => dispatch(updateSearch(e.target.value))}
      />
    </div>
  );
};

export default SearchComponent;
