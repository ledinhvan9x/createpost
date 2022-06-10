import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import * as actions from 'actions/index';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import styles from './PostItemDetail.module.scss';

function PostItemDetail({ postitemdetail }) {
  const notify = () => toast.success('Delete Post Successfully!');
  const dispatch = useDispatch();
  const onDelete = (id) => {
    if (window.confirm('Delete this post?')) {
      dispatch(actions.actDeletePostRequest(id));
    }
  };
  const { title, body, id } = postitemdetail;
  return (
    <>
      <h1>
        Đây là nội dung chi tiết bài Post
        {' '}
        {id}
      </h1>
      <img src="https://picsum.photos/400/200" alt="" />
      <h2>
        Đây là tiêu đề:
        {' '}
        {title}
      </h2>
      <p>
        Đây là phần nội dung:
        {' '}
        {body}
      </p>
      <div className={`d-flex ${styles.custom_margin}`}>
        <NavLink to={`/viewposts/${id}/edit`} className="btn btn-primary mx-1">Edit</NavLink>
        <NavLink
          to="/viewposts"
          className="btn btn-danger mx-1"
          onClick={() => {
            onDelete(id);
            notify();
          }}
        >
          Delete
        </NavLink>
        {/* <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}

      </div>
      <NavLink to="/viewposts" type="button" className="btn btn-outline-success">Back To View Posts</NavLink>
    </>
  );
}

PostItemDetail.propTypes = {
  // item: PropTypes.oneOfType([PropTypes.object]),
  postitemdetail: PropTypes.instanceOf(Object),
};

PostItemDetail.defaultProps = {
  postitemdetail: {},
};

export default memo(PostItemDetail);
