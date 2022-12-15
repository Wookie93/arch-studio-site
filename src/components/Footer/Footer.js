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
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <Button>See Our Portfolio</Button>
      </div>
    </div>
  </footer>
);

export default Footer;
