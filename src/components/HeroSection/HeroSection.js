import * as React from 'react';
import { GatsbyImage, withArtDirection, getImage } from 'gatsby-plugin-image';
import './HeroSection.scss';

const HeroSection = ({ shadowTitle, title, text, img }) => {
  const images = withArtDirection(getImage(img[2]), [
    {
      media: '(max-width: 414px)',
      image: getImage(img[1]),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(img[0]),
    },
  ]);

  return (
    <section className="hero">
      <GatsbyImage image={images} alt="hero image" />
      <p className="shadow-title">{shadowTitle}</p>
      <div className="hero__text-wrap">
        <h2 className="title">{title}</h2>
        <p className="text">{text}</p>
      </div>
    </section>
  );
};

export default HeroSection;
