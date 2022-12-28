import * as React from 'react';
import PortfolioCardList from '../components/PortfolioCardList/PortfolioCardList.js';
import { SEO } from '../components/SEO/seo.js';

const PortfolioPage = () => {
  return <PortfolioCardList />;
};

export default PortfolioPage;

export const Head = () => <SEO title="Portfolio list" />;
