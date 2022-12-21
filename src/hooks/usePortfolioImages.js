import { useStaticQuery, graphql } from 'gatsby';

export const usePortfolioImages = () => {
  const { allCloudinaryMedia } = useStaticQuery(graphql`
    query {
      allCloudinaryMedia {
        nodes {
          publicId
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const imagesObj = allCloudinaryMedia.nodes.reduce(
    (obj, item) =>
      Object.assign(obj, { [item.publicId]: item.gatsbyImageData }),
    {}
  );

  return imagesObj;
};
