import * as React from 'react';
import { graphql } from 'gatsby';

import HeroSection from '../components/HeroSection/HeroSection';
import ContactDetail from '../components/ContactDetails/ContactDetails';
import ContactForm from '../components/ContactForm/ContactForm';
import Map from '../components/Map/Map';
import { SEO } from '../components/SEO/seo.js';

const ContactPage = ({ data }) => {
  return (
    <main>
      <HeroSection
        shadowTitle="Contact"
        title="Tell us about your project"
        text="We’d love to hear more about your project. Please, leave a message
        below or give us a call. We have two offices, one in Texas and one
        in Tennessee. If you find yourself nearby, come say hello!"
        img={data.allCloudinaryMedia.nodes}
      />

      <ContactDetail />
      <Map />
      <ContactForm />
    </main>
  );
};

export const query = graphql`
  query {
    allCloudinaryMedia(filter: { folder: { eq: "hero/contact" } }) {
      nodes {
        gatsbyImageData
      }
    }
  }
`;

export default ContactPage;
export const Head = () => <SEO title="Contact Page" />;
