import * as React from 'react';
import './Logo.scss';
import logo from '../../assets/images/logo.svg';
import logoInBox from '../../assets/images/logo-in-box.svg';
import { Link } from 'gatsby';

const Logo = ({ inBox }) => (
  <div className="logo">
    <Link to="/">
      <img src={inBox ? logoInBox : logo} alt="logo" />
    </Link>
  </div>
);

export default Logo;
