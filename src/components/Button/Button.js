import * as React from 'react';
import arrow from '../../assets/images/icons/icon-arrow-white.svg';
import './Button.scss';

const Button = ({ ifEmpty, children }) => (
  <button className="btn">
    <span className="btn__text">{children}</span>
    {ifEmpty ? null : <img className="btn__arrowIco" src={arrow}></img>}
  </button>
);

export default Button;
