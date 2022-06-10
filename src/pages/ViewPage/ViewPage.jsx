/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import React from 'react';
import PostItem from 'components/PostItem/PostItem';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/index';
import styles from './ViewPage.module.scss';

export default function ViewPage() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(actions.actFetchPostsRequest());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 d-flex flex-column align-items-center">
          {!!posts?.length && posts.map((item, index) => (
            <div className={`${styles.custom_padding}`} key={item.id + item.title + Math.random()}>
              <PostItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
