import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Banner from '../components/Banner/Banner.js';
import Featured from '../components/Featured/Featured.js';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection.js';

const IndexPage = () => {
  return (
    <>
      <StaticImage
        src="../assets/images/home/mobile/image-hero-paramour.jpg"
        alt="image-hero-paramour"
      />
      <main>
        <WelcomeSection />
        <Banner />
        <Featured />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
