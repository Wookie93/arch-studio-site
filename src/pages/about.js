import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeroSection from '../components/HeroSection/HeroSection';
import Leaders from '../components/Leaders/Leaders';
import Heritage from '../components/Heritage/Heritage';

const AboutPage = () => {
  return (
    <main>
      <HeroSection
        shadowTitle="About"
        title="Your team of professionals"
        text="Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings."
      >
        <StaticImage
          src="../assets/images/about/mobile/image-hero.jpg"
          alt="hero image"
        />
      </HeroSection>
      <Heritage />
      <Leaders />
    </main>
  );
};

export default AboutPage;
