import * as React from 'react';
import './HeroSection.scss';

const HeroSection = ({ children, shadowTitle, title, text }) => (
  <section className="hero">
    {children}
    <p className="shadow-title">{shadowTitle}</p>
    <div className="hero__text-wrap">
      <h2 className="title">{title}</h2>
      <p className="text">{text}</p>
    </div>
  </section>
);

export default HeroSection;
