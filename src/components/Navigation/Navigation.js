import * as React from 'react';
import { Link } from 'gatsby';
import './Navigation.scss';
import burger from '../../assets/images/icons/icon-hamburger.svg';
import close from '../../assets/images/icons/icon-close.svg';

const Links = () => {
  const [isopen, toggleBurger] = React.useState(false);
  return (
    <nav className="nav">
      <button className="burger-ico" onClick={() => toggleBurger(!isopen)}>
        <img src={isopen ? close : burger} alt="menu ico"></img>
      </button>
      <ul className={isopen ? 'menu-list open' : 'menu-list'}>
        <li className="menu-list__link">
          <Link to="/portfolio" onClick={() => toggleBurger(false)}>
            Portfolio
          </Link>
        </li>
        <li className="menu-list__link">
          <Link to="/about" onClick={() => toggleBurger(false)}>
            About Us
          </Link>
        </li>
        <li className="menu-list__link">
          <Link to="/contact" onClick={() => toggleBurger(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Links;
