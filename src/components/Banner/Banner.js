import * as React from 'react';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import './Banner.scss';
import Button from '../Button/Button';

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      imgDesktop: file(
        relativeDirectory: {}
        relativePath: { eq: "home/desktop/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      imgTablet: file(
        relativeDirectory: {}
        relativePath: { eq: "home/tablet/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      imgMobile: file(
        relativeDirectory: {}
        relativePath: { eq: "home/mobile/image-small-team.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const images = withArtDirection(getImage(data.imgDesktop), [
    {
      media: '(max-width: 600px)',
      image: getImage(data.imgMobile),
    },
    {
      media: '(max-width: 1024px)',
      image: getImage(data.imgTablet),
    },
  ]);

  return (
    <section className="banner">
      <GatsbyImage image={images} alt="image-small-team" className="bcg-img" />
      <div className="mask"></div>
      <div className="grid-for-bcg">
        <div>
          <h2>Small team, big ideas</h2>
          <Button>
            <Link to="/about">About us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
