import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

function ButtonGroup() {
  return (
    <div>
      <ul className="nav nav-pills nav-justified" id="ex1" role="tablist">
        <li className="nav-item mx-2" role="presentation">
          <NavLink
            className="btn btn-primary shadow-none"
            id="tab-login"
            data-mdb-toggle="pill"
            to="/login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Login
          </NavLink>
        </li>
        <li className="nav-item" role="presentation" style={{ width: '100px' }}>
          <NavLink
            className="btn btn-success shadow-none"
            id="tab-register"
            data-mdb-toggle="pill"
            to="/signup"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default memo(ButtonGroup);
