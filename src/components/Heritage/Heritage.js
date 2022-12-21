import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Heritage.scss';

const Heritage = () => {
  return (
    <section>
      <div>
        <h2>Our Heritage</h2>
        <p>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p>
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p>
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div>
        <StaticImage
          src="../../assets/images/about/desktop/image-heritage.jpg"
          alt="heriatege-image"
        />
      </div>
    </section>
  );
};

export default Heritage;
