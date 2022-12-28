import { Link } from 'gatsby';
import * as React from 'react';

import Button from '../components/Button/Button';
import { SEO } from '../components/SEO/seo.js';

const NotFoundPage = () => {
  return (
    <main>
      <h1>Upssss.... Nothing here</h1>
      <Button>
        <Link to="/portfolio">See our amazing portfolio</Link>
      </Button>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <SEO title="Not Found Page" />;
