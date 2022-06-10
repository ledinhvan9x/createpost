import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

function Content() {
  return (
    <div className="container-fluid pt-5">
      <div className="text-center">
        <h1>CreatePost</h1>
        <p className="lead">
          Use leading lines to direct the reader&#39;s eyes on your creative
          poster!
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <NavLink
          to="/viewposts"
          type="button"
          className="btn btn-outline-primary mx-2"
        >
          Click To Views All Posts
        </NavLink>
        <NavLink
          to="/addpost"
          type="button"
          className="btn btn-outline-info text-dark mx-2"
        >
          Click To Add New Post
        </NavLink>
      </div>
    </div>
  );
}

export default memo(Content);
