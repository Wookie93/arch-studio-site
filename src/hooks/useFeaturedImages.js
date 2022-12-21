import { useStaticQuery, graphql } from 'gatsby';

export const useFeaturedImages = () => {
  const {
    delSol,
    delSolTablet,
    delSolMobile,
    tower,
    towerTablet,
    towerMobile,
    prototype,
    prototypeTablet,
    prototypeMobile,
  } = useStaticQuery(graphql`
    query {
      delSol: file(relativePath: { eq: "home/desktop/image-del-sol.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      delSolTablet: file(
        relativePath: { eq: "home/tablet/image-del-sol.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      delSolMobile: file(
        relativePath: { eq: "home/mobile/image-del-sol.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      tower: file(relativePath: { eq: "home/desktop/image-228b.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      towerTablet: file(relativePath: { eq: "home/tablet/image-228b.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      towerMobile: file(relativePath: { eq: "home/mobile/image-228b.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      prototype: file(
        relativePath: { eq: "home/desktop/image-prototype.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      prototypeTablet: file(
        relativePath: { eq: "home/tablet/image-prototype.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
      prototypeMobile: file(
        relativePath: { eq: "home/mobile/image-prototype.png" }
      ) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return {
    delSol,
    delSolTablet,
    delSolMobile,
    tower,
    towerTablet,
    towerMobile,
    prototype,
    prototypeTablet,
    prototypeMobile,
  };
};
