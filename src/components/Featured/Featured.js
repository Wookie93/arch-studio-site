import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './Featured.scss';
import Button from '../Button/Button';

const Featured = () => (
  <section className="featured">
    <h2>Featured</h2>
    <div className="featured__wrap">
      <div className="featured__box">
        <StaticImage
          src="../../assets/images/portfolio/mobile/image-del-sol.png"
          alt=""
          class="bcg-img"
        />
        <div className="grid-for-bcg featured__text-wrap">
          <span className="featured__counter">1</span>
          <div className="featured__inner-text-wrap">
            <h3>Project Del Sol</h3>
            <p>View All Projects</p>
          </div>
        </div>
      </div>

      <div className="featured__box">
        <StaticImage
          src="../../assets/images/portfolio/mobile/image-228b.png"
          alt=""
          class="bcg-img"
        />
        <div className="grid-for-bcg featured__text-wrap">
          <span className="featured__counter">2</span>
          <div className="featured__inner-text-wrap">
            <h3>228B Tower</h3>
            <p>View All Projects</p>
          </div>
        </div>
      </div>

      <div className="featured__box">
        <StaticImage
          src="../../assets/images/portfolio/mobile/image-prototype.png"
          alt=""
          class="bcg-img"
        />
        <div className="grid-for-bcg featured__text-wrap">
          <span className="featured__counter">3</span>
          <div className="featured__inner-text-wrap">
            <h3>Le Prototype</h3>
            <p>View All Projects</p>
          </div>
        </div>
      </div>
    </div>
    <Button>See all</Button>
  </section>
);

export default Featured;
