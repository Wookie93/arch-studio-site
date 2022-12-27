import * as React from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import './Featured.scss';
import Button from '../Button/Button';
import { useFeaturedImages } from '../../hooks/useFeaturedImages';
import { Link } from 'gatsby';

const Featured = () => {
  const images = useFeaturedImages();

  const delSolImages = withArtDirection(getImage(images.delSol), [
    {
      media: '(max-width: 414px)',
      image: getImage(images.delSolMobile),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(images.delSolTablet),
    },
  ]);
  const towerImages = withArtDirection(getImage(images.tower), [
    {
      media: '(max-width: 414px)',
      image: getImage(images.towerMobile),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(images.towerTablet),
    },
  ]);
  const prototypeImages = withArtDirection(getImage(images.prototype), [
    {
      media: '(max-width: 414px)',
      image: getImage(images.prototypeMobile),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(images.prototypeTablet),
    },
  ]);

  return (
    <section className="featured">
      <h2>Featured</h2>
      <div className="featured__wrap">
        <div className="featured__box">
          <GatsbyImage image={delSolImages} alt="del-sol" className="bcg-img" />
          <div className="grid-for-bcg featured__text-wrap">
            <span className="featured__counter">1</span>
            <div className="featured__inner-text-wrap">
              <h3>Project Del Sol</h3>
              <Link to="/portfolio">View All Projects</Link>
            </div>
          </div>
        </div>

        <div className="featured__box">
          <GatsbyImage image={towerImages} alt="tower" className="bcg-img" />
          <div className="grid-for-bcg featured__text-wrap">
            <span className="featured__counter">2</span>
            <div className="featured__inner-text-wrap">
              <h3>228B Tower</h3>
              <Link to="/portfolio">View All Projects</Link>
            </div>
          </div>
        </div>

        <div className="featured__box">
          <GatsbyImage
            image={prototypeImages}
            alt="prototype"
            className="bcg-img"
          />
          <div className="grid-for-bcg featured__text-wrap">
            <span className="featured__counter">3</span>
            <div className="featured__inner-text-wrap">
              <h3>Le Prototype</h3>
              <Link to="/portfolio">View All Projects</Link>
            </div>
          </div>
        </div>
      </div>
      <Button>
        <Link to="/portfolio">See all</Link>
      </Button>
    </section>
  );
};

export default Featured;
