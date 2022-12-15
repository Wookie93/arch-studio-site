import * as React from 'react';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
// import '../assets/styles/_global.scss';

export function MainTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
