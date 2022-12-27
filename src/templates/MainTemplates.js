import * as React from 'react';
import { useLocation } from '@reach/router';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb.js';

export function MainTemplate({ children }) {
  const pathname = useLocation().pathname.replace(/\//g, '');

  return (
    <>
      <Breadcrumb pathname={pathname} />
      <Header />
      {children}
      <Footer />
    </>
  );
}
