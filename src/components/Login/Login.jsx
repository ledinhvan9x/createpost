/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import TextField from 'components/TextField/TextField';
import * as Yup from 'yup';

function Login() {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
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
              <h1 className="my-4 .display-4">Login</h1>
              <Form>
                <TextField label="Email" name="email" type="email" autoFocus />
                <TextField label="Password" name="password" type="password" />

                <button className="btn btn-success shadow-none my-3 mx-2" type="submit">
                  Login
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

export default memo(Login);
