import React from 'react';
import SignUp from 'components/SignUp/SignUp';
import styles from './SignUpPage.module.scss';

function SignUpPage() {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-sm-6 offset-3 ${styles.custom_padding}`}>
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
