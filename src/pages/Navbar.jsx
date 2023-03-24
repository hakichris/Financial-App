import React from 'react';
import logo from '../asset/applelogo.jpeg';
import SearchComponent from '../components/Searchbar';

const Header = () => (
  <div className="header">
    <div className="Title">
      <div className="logoName">
        {' '}
        <img src={logo} alt="logo" />
        <h1>Apple Inc.</h1>
      </div>

      <h2>Financial statements of Apple Inc. over a period of 5 years</h2>
      <p className="calendar">Calendar Year: 2022 - 2019</p>
      <SearchComponent info="common" />
    </div>

  </div>
);

export default Header;
