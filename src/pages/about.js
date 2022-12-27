import * as React from 'react';
import { graphql } from 'gatsby';

import HeroSection from '../components/HeroSection/HeroSection';
import Leaders from '../components/Leaders/Leaders';
import Heritage from '../components/Heritage/Heritage';

const AboutPage = ({ data }) => {
  return (
    <main>
      <HeroSection
        shadowTitle="About"
        title="Your team of professionals"
        text="Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings."
        img={data.allCloudinaryMedia.nodes}
      />

      <Heritage />
      <Leaders />
    </main>
  );
};

export const query = graphql`
  query {
    allCloudinaryMedia(filter: { folder: { eq: "hero/about" } }) {
      nodes {
        gatsbyImageData
      }
    }
  }
`;

export default AboutPage;
