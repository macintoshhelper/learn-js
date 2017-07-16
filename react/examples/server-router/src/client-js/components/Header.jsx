import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    <Routes />
  </header>
);

export default Header;
