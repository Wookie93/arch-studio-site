import * as React from 'react';
import Button from '../Button/Button';
import { Formik, Form } from 'formik';
import './ContactForm.scss';
import InputWrap from '../FormInputWrap/FormInputWrap';

const ContactForm = () => {
  return (
    <section className="form-wrap">
      <h2 className="form-wrap__title">Connect with us</h2>

      <Formik
        initialValues={{ name: '', email: '', msg: '' }}
        validate={(values) => {
          const errors = {};
          const regex = new RegExp(
            '!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i'
          );
          if (!values.email) errors.email = 'Can’t be empty';
          else if (regex.test(values.email))
            errors.email = 'Invalid email address';

          if (!values.email || regex.test(values.email))
            document
              .querySelector('.input-wrap[data-for="email"]')
              .classList.add('empty-validated');

          if (!values.name) {
            errors.name = 'Can’t be empty';
            document
              .querySelector('.input-wrap[data-for="name"]')
              .classList.add('empty-validated');
          }
          if (!values.msg) {
            errors.msg = 'Can’t be empty';
            document
              .querySelector('.input-wrap[data-for="msg"]')
              .classList.add('empty-validated');
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form className="form">
            <InputWrap
              labelName="Name"
              type="text"
              name="name"
              value={values.name}
            />
            <InputWrap
              labelName="Email"
              type="email"
              name="email"
              value={values.email}
            />
            <InputWrap
              labelName="Message"
              type="text"
              name="msg"
              value={values.msg}
            />
            <Button isEmpty type="submit" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
