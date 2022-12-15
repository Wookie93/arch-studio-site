import * as React from 'react';
import './Header.scss';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
