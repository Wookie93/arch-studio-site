import * as React from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import './PortfolioCard.scss';

const PortfolioCard = ({
  title = 'dupa',
  date = '12 sdsdsd',
  imgDesktop,
  imgMobile,
  imgTablet,
}) => {
  const images = withArtDirection(getImage(imgDesktop), [
    {
      media: '(max-width: 639px)',
      image: getImage(imgMobile),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(imgTablet),
    },
  ]);

  return (
    <div className="card">
      <div className="card__img-wrap">
        <GatsbyImage image={images} alt="sss" />
      </div>
      <div className="card__text">
        <h3 className="card__text-title">{title}</h3>
        <p className="card__text-date">{date}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
