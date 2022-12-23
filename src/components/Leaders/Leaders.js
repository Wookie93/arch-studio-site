import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import './Leaders.scss';

const Leaders = () => {
  const data = useStaticQuery(graphql`
    query {
      maria: cloudinaryMedia(publicId: { eq: "leaders/avatar-maria_lmqhav" }) {
        gatsbyImageData
      }
      jackson: cloudinaryMedia(
        publicId: { eq: "leaders/avatar-jackson_ug3dbk" }
      ) {
        gatsbyImageData
      }
      thompson: cloudinaryMedia(
        publicId: { eq: "leaders/avatar-thompson_i3eqwk" }
      ) {
        gatsbyImageData
      }
      jake: cloudinaryMedia(publicId: { eq: "leaders/avatar-jake_wqczao" }) {
        gatsbyImageData
      }
    }
  `);

  return (
    <section className="leaders">
      <h2 className="leaders__title">The Leaders</h2>
      <div className="leaders__wrap">
        <div className="leaders__item">
          <GatsbyImage image={getImage(data.jake)} alt="jake" />
          <div className="leaders__text-wrap">
            <p className="leaders__item-title">Jake Richards</p>
            <p>Chief Architect</p>
          </div>
        </div>

        <div className="leaders__item">
          <GatsbyImage image={getImage(data.thompson)} alt="thompson" />
          <div className="leaders__text-wrap">
            <p className="leaders__item-title">Thompson Smith</p>
            <p>Head of Finance</p>
          </div>
        </div>

        <div className="leaders__item">
          <GatsbyImage image={getImage(data.jackson)} alt="jackson" />
          <div className="leaders__text-wrap">
            <p className="leaders__item-title">Jackson Rourke</p>
            <p>Lead Designer</p>
          </div>
        </div>

        <div className="leaders__item">
          <GatsbyImage image={getImage(data.maria)} alt="maria" />
          <div className="leaders__text-wrap">
            <p className="leaders__item-title">Maria Simpson</p>
            <p>Senior Architect</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
