import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Banner.scss';
import Button from '../Button/Button';

const Banner = () => (
  <section className="banner">
    <StaticImage
      src="../assets/images/home/mobile/image-small-team.jpg"
      alt="image-small-team"
      className="bcg-img"
    />
    <div className="mask"></div>
    <div className="grid-for-bcg">
      <div>
        <h2>Small team, big ideas</h2>
        <Button>About us</Button>
      </div>
    </div>
  </section>
);

export default Banner;
