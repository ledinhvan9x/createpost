import React from 'react';
import CreateAndUpdatePost from 'components/CreateAndUpdatePost/CreateAndUpdatePost';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import * as actions from 'actions/index';
import styles from './EditPage.module.scss';

export default function EditPage() {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-sm-6 offset-3 ${styles.custom_padding}`}>
          <CreateAndUpdatePost isupdatepost={false} />
        </div>
      </div>
    </div>
  );
}
