import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from './logo.png';

function Header() {
  const location = useLocation();

  const isCurrent = (path) => location.pathname === path;

  return (
    <header>
      <nav>
        <div>
          <Link className='logo' to="/">
            <img src={Logo} alt="logo" height='50'/>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className={isCurrent('/') ? 'current' : ''}>HOME</Link>
          <Link to="/about" className={isCurrent('/about') ? 'current' : ''}>ABOUT</Link>
          <Link className={isCurrent('/contact') ? 'current' : ''} to="/contact">CONTACT US</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;