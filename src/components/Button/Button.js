import * as React from 'react';
import arrow from '../../assets/images/icons/icon-arrow-white.svg';
import './Button.scss';

const Button = ({ isEmpty, children, type }) => (
  <button className={isEmpty ? 'btn empty' : 'btn'} type={type}>
    {isEmpty ? null : <span className="btn__text">{children}</span>}
    <img className="btn__arrowIco" src={arrow} alt="arrow ico"></img>
  </button>
);

export default Button;
