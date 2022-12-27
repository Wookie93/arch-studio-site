import * as React from 'react';
import { Field, ErrorMessage } from 'formik';
import './FormInputWrap.scss';

const InputWrap = ({ labelName, type, name, validate, value }) => {
  function setStyleOnBlur(e) {
    const inputWrap = e.currentTarget;
    const label = document.querySelector(
      `.label[for="${inputWrap.getAttribute('data-for')}"]`
    );

    if (!value) {
      inputWrap.classList.add('empty-validated');
      label.classList.remove('hide');
    }

    if (value) {
      inputWrap.classList.remove('empty-validated');
      label.classList.add('hide');
    }
  }

  return (
    <div className="input-wrap" data-for={name} onBlur={setStyleOnBlur}>
      <Field className="input" type={type} name={name} validate={validate} />
      <label className="label" htmlFor={name}>
        {labelName}
      </label>
      <ErrorMessage className="error-msg" name={name} component="div" />
    </div>
  );
};

export default InputWrap;
