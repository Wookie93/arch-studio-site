import { Link } from 'gatsby';
import * as React from 'react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__innerwrap">
      <Logo inBox={true} />
      <div className="footer__linkswrap">
        <ul className="footer__links">
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Button>
          <Link to="/portfolio">See Our Portfolio</Link>
        </Button>
      </div>
    </div>
  </footer>
);

export default Footer;
