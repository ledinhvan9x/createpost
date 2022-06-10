/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import TextField from 'components/TextField/TextField';
import * as Yup from 'yup';

function SignUp() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-2">
              <h1 className="my-4 .display-4">Sign Up</h1>
              <Form>
                <TextField label="First Name" name="firstName" type="text" autoFocus />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="email" />
                <TextField label="Password" name="password" type="password" />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <button className="btn btn-success shadow-none my-3 mx-2" type="submit">
                  Register
                </button>
                <button className="btn btn-danger shadow-none" type="reset">
                  Reset
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default memo(SignUp);
