import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function PostItem({ item }) {
  const { title, body, id } = item;
  return (
    <div className="card border border-primary" style={{ width: '18rem' }}>
      <img
        src="https://picsum.photos/300/200"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body}
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <NavLink to={`/viewposts/${id}`} className="btn btn-success shadow-none">
          View Detail Post
          {' '}
          {id}
        </NavLink>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  // item: PropTypes.oneOfType([PropTypes.object]),
  item: PropTypes.instanceOf(Object),
};

PostItem.defaultProps = {
  item: {},
};

export default memo(PostItem);
