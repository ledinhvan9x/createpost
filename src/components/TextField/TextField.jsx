/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';
import styles from './TextField.module.scss';

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name} className={`${styles.custom}`}>
        {label}
      </label>
      {props.istextarea ? (
        // eslint-disable-next-line jsx-a11y/no-autofocus
        <textarea
          value={' '}
          rows={label === 'Title' ? '2' : '4'}
          className={`form-control shadow-none ${
            meta.touched && meta.error && 'is-invalid'
          }`}
          {...field}
          {...props}
        />
      ) : (
        <input
          className={`form-control shadow-none ${
            meta.touched && meta.error && 'is-invalid'
          }`}
          {...field}
          {...props}
          autoComplete="off"
        />
      )}

      <ErrorMessage
        component="div"
        name={field.name}
        className={`${styles.error}`}
      />
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  istextarea: PropTypes.bool,

};
TextField.defaultProps = {
  istextarea: false,

};

export default memo(TextField);
