import * as React from 'react';

const ContactPage = () => {
  return (
    <main>
      <section>
        <div>IMG</div>
        <p className="shadow-title">Contact</p>
        <div>
          <h2>Tell us about your project</h2>
          <p>
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </p>
        </div>
      </section>

      <section>
        <h2>Contact Details</h2>
        <div className="detail">
          <p>Main Office</p>
          <p>Mail : archone@mail.com</p>
          <p>Address : 1892 Chenoweth Drive TN</p>
          <p>Phone : 123-456-3451</p>
          <button>View on Map</button>
        </div>
        <div className="detail">
          <p>Office II</p>
          <p>Mail : archtwo@mail.com</p>
          <p>Address : 3399 Wines Lane TX</p>
          <p>Phone : 832-123-4321</p>
          <button>View on Map</button>
        </div>
      </section>

      <section className="map"></section>

      <section>
        <h2>Connect with us</h2>
        <form>
          <div>
            <label>Name</label>
            <input />
          </div>
          <div>
            <label>Email</label>
            <input />
          </div>
          <div>
            <label>Message</label>
            <input />
          </div>
          <button type="submit"></button>
        </form>
      </section>
    </main>
  );
};

export default ContactPage;
