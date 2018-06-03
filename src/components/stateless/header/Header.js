import React from 'react';
import logo from '../../../assets/picky-eater-logo.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/" className="home"><img src={logo} className="App-logo" alt="Picky Eater Logo" /></NavLink>
      <div className="tag-line"><p>There is a right choice after all.</p></div>
    </header>
  );
};

export default Header;
