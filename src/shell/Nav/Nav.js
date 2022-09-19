import React, {useState} from 'react';

export default function Nav() {

  return (
    <div className="nav_container">
      <div className="nav">
        <div className="nav_options">
          <p>Template</p>
        </div>
        <div className="nav_title">
          <a className="nav_login" href="">LogIn</a>
        </div>
      </div>
    </div>
  );
}