import React from 'react';
import CreateAndUpdatePost from 'components/CreateAndUpdatePost/CreateAndUpdatePost';
import styles from './AddPage.module.scss';

export default function AddPage() {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-sm-6 offset-3 ${styles.custom_padding}`}>
          <CreateAndUpdatePost isupdatepost />
        </div>
      </div>
    </div>
  );
}
