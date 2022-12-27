import * as React from 'react';
import './ContactDetails.scss';

const ContactDetail = () => (
  <section className="contact-details">
    <h2 className="contact-details__title">Contact Details</h2>
    <div className="contact-details__wrap">
      <div className="contact-details__detail">
        <div>
          <p className="bold">Main Office</p>
          <p>Mail : archone@mail.com</p>
          <p>Address : 1892 Chenoweth Drive TN</p>
          <p>Phone : 123-456-3451</p>
        </div>
        <button className="map-btn">View on Map</button>
      </div>
      <div className="contact-details__detail">
        <div>
          <p className="bold">Office II</p>
          <p>Mail : archtwo@mail.com</p>
          <p>Address : 3399 Wines Lane TX</p>
          <p>Phone : 832-123-4321</p>
        </div>
        <button className="map-btn">View on Map</button>
      </div>
    </div>
  </section>
);

export default ContactDetail;
