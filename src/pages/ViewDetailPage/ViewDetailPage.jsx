import React from 'react';
import PostItemDetail from 'components/PostItemDetail/PostItemDetail';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actions/index';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import styles from './ViewDetailPage.module.scss';

export default function ViewDetailPage() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const params = useParams();
  const index = _.findIndex(posts, (o) => o.id.toString() === params.id);

  React.useEffect(() => {
    dispatch(actions.actFetchPostsRequest());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className={`col-sm-12 d-flex flex-column align-items-center ${styles.custom_padding}`}>
          <PostItemDetail postitemdetail={posts[index]} />
        </div>
      </div>
    </div>
  );
}
