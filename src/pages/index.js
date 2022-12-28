import * as React from 'react';
import Banner from '../components/Banner/Banner.js';
import Featured from '../components/Featured/Featured.js';
import WelcomeSection from '../components/WelcomeSection/WelcomeSection.js';
import SliderComponent from '../components/Slider/Slider.js';
import { SEO } from '../components/SEO/seo.js';

const IndexPage = () => {
  return (
    <>
      <SliderComponent />
      <main>
        <WelcomeSection />
        <Banner />
        <Featured />
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Home Page" />;
