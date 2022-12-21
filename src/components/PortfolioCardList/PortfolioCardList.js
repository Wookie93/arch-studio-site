import * as React from 'react';
import PortfolioCard from '../PortfolioCard/PortfolioCard';
import { usePortfolioImages } from '../../hooks/usePortfolioImages';
import portfolioData from '../../assets/portfolioData.json';
import './PortfolioCardList.scss';

const PortfolioCardList = () => {
  const images = usePortfolioImages();
  console.log(portfolioData);

  return (
    <div className="card-list">
      {portfolioData.map((item, index) => (
        <PortfolioCard
          key={index}
          title={item.name}
          date={item.date}
          imgDesktop={images[item.imgDesktop]}
          imgMobile={images[item.imgMobile]}
          imgTablet={images[item.imgTablet]}
        />
      ))}
    </div>
  );
};

export default PortfolioCardList;
