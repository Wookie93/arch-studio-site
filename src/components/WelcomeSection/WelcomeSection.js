import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './WelcomeSection.scss';

const WelcomeSection = () => (
  <section className="welcome">
    <p className="shadow-title">Welcome</p>
    <div className="welcome__text-wrap">
      <h2 className="welcome__title">Welcome to Arch Studio</h2>
      <p>
        We have a unique network and skillset to help bring your projects to
        life. Our small team of highly skilled individuals combined with our
        large network put us in a strong position to deliver exceptional
        results.
      </p>
      <p>
        Over the past 10 years, we have worked on all kinds of projects. From
        stations to high-rise buildings, we create spaces that inspire and
        delight.
      </p>
      <p>
        We work closely with our clients so that we understand the intricacies
        of each project. This allows us to work in harmony the surrounding area
        to create truly stunning projects that will stand the test of time.
      </p>
    </div>
    <StaticImage
      src="../../assets/images/home/desktop/image-welcome.jpg"
      alt="welcome-image"
      className="only-desktop"
    />
  </section>
);

export default WelcomeSection;
