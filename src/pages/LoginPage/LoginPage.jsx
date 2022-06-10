import React from 'react';
import Login from 'components/Login/Login';
import styles from './LoginPage.module.scss';

function LoginPage() {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-sm-6 offset-3 ${styles.custom_padding}`}>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
