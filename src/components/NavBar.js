/* eslint-disable react/style-prop-object */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomepageStyles.scss';

const NavBar = () => {
  return (
    <nav>
      <ul id="navBar">
        <li id="home"><NavLink to="/" exact><img src="src/img/ffrLogo.svg" alt="" width="60%" /></NavLink></li>
        <li id="about"><NavLink to="/about"><div style={{ color: '#FFFDEC', margin: 10, font: 'Neue Haas Grotesk Text Std' }}>About</div></NavLink></li>
      </ul>
    </nav>
  );
};
export default NavBar;
