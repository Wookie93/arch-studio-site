import * as React from 'react';
import './Breadcrumb.scss';

const Breadcrumb = ({ pathname }) => {
  const label = pathname === '' ? 'HOME' : pathname.toUpperCase();
  return <div className="breadcrumb">{label}</div>;
};

export default Breadcrumb;
