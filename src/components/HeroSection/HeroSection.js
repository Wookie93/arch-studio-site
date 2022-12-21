import * as React from 'react';
import './HeroSection.scss';

const HeroSection = ({ children, shadowTitle, title, text }) => (
  <section>
    {children}
    <p className="shadow-title">{shadowTitle}</p>
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </section>
);

export default HeroSection;
