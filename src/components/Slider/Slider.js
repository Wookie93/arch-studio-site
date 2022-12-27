import * as React from 'react';
import { useSliderImages } from '../../hooks/useSliderImages.js';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import Button from '../Button/Button';
import './Slider.scss';
import { Link } from 'gatsby';

const SliderComponent = () => {
  /// SLIDER IMAGES
  const data = useSliderImages();

  /// can be move to separeate component
  const trinityImages = withArtDirection(getImage(data['image-hero-trinity']), [
    {
      media: '(max-width: 414px)',
      image: getImage(data['image-hero-trinity-mobile']),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(data['image-hero-trinity-tablet']),
    },
  ]);
  const federalImages = withArtDirection(getImage(data['image-hero-federal']), [
    {
      media: '(max-width: 414px)',
      image: getImage(data['image-hero-federal-mobile']),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(data['image-hero-federal-tablet']),
    },
  ]);
  const paramourImages = withArtDirection(
    getImage(data['image-hero-paramour']),
    [
      {
        media: '(max-width: 414px)',
        image: getImage(data['image-hero-paramour-mobile']),
      },
      {
        media: '(max-width: 1024px)',
        image: getImage(data['image-hero-paramour-tablet']),
      },
    ]
  );
  const seraphImages = withArtDirection(getImage(data['image-hero-seraph']), [
    {
      media: '(max-width: 414px)',
      image: getImage(data['image-hero-seraph-mobile']),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(data['image-hero-seraph-tablet']),
    },
  ]);

  /// SETTINGS FOR SLIDER
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <button>
        {Math.floor(i / 10)}
        {i + 1}
      </button>
    ),
  };

  return (
    <div className="slider-wrap">
      <Slider {...settings}>
        <div className="slide">
          <div className="slide__content">
            <h1>Project Paramour</h1>
            <p>
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </p>
            <Button>
              <Link to="/portfolio">See Our Portfolio</Link>
            </Button>
          </div>
          <GatsbyImage image={paramourImages} alt="image" />
        </div>

        <div className="slide">
          <div className="slide__content">
            <h1>Seraph Station</h1>
            <p>
              The Seraph Station project challenged us to design a unique
              station that would transport people through time. The result is a
              fresh and futuristic model inspired by space stations.
            </p>
            <Button>
              <Link to="/portfolio">See Our Portfolio</Link>
            </Button>
          </div>
          <GatsbyImage image={seraphImages} alt="image" />
        </div>

        <div className="slide">
          <div className="slide__content">
            <h1>Federal II Tower</h1>
            <p>
              A sequel theme project for a tower originally built in the 1800s.
              We achieved this with a striking look of brutal minimalism with
              modern touches.
            </p>
            <Button>
              <Link to="/portfolio">See Our Portfolio</Link>
            </Button>
          </div>
          <GatsbyImage image={federalImages} alt="image" />
        </div>

        <div className="slide">
          <div className="slide__content">
            <h1>Trinity Bank Tower</h1>
            <p>
              Trinity Bank challenged us to make a concept for a 84 story
              building located in the middle of a city with a high earthquake
              frequency. For this project we used curves to blend design and
              stability to meet our objectives.
            </p>
            <Button>
              <Link to="/portfolio">See Our Portfolio</Link>
            </Button>
          </div>
          <GatsbyImage image={trinityImages} alt="image" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
