import React from 'react';
import logo from '../../../assets/picky-eater-logo.png';
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
