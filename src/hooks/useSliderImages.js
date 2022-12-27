import { useStaticQuery, graphql } from 'gatsby';

export const useSliderImages = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "slider" } }) {
        nodes {
          name
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  const imagesObj = allFile.nodes.reduce(
    (obj, item) =>
      Object.assign(obj, { [item.name]: item.childrenImageSharp[0] }),
    {}
  );

  return imagesObj;
};
