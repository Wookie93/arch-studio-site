import * as React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Logo from '../Logo/Logo.js';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
