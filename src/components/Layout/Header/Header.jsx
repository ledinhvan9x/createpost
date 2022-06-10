/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonGroup from './ButtonGroup/ButtonGroup';

function Header() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            CreatePost
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/viewposts">
                  View Posts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="addpost">
                  Add Post
                </NavLink>
              </li>
            </ul>
          </div>
          <ButtonGroup />
        </div>
      </nav>
    </div>
  );
}

export default memo(Header);
