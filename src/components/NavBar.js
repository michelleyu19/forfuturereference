import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomepageStyles.scss';

const NavBar = () => {
  return (
    <nav>
      <ul id="navBar">
        <li id="home"><NavLink to="/" exact>For Future Reference</NavLink></li>
        <li id="about"><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
