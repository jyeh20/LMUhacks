import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: 'white'
    };

  return (
      <nav>
          <h3>Logo</h3>
          <ul className = "nav-links">
              <Link style={navStyle} to="/">
                <li>Home</li>
              </Link>
              <Link style={navStyle} to="/register">
                <li>Register</li>
              </Link>
              <Link style={navStyle} to="/users">
                <li>Members</li>
              </Link>
              <Link style={navStyle} to="/ChatComponent">
                <li>Chat Room</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
