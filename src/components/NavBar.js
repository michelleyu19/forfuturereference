import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomepageStyles.scss';
import ffrLogo from '../img/ffrLogo.svg';

const NavBar = () => {
  return (
    <nav className="padding">
      <ul id="navBar">
        <li id="home"><NavLink to="/" exact><img src={ffrLogo} alt="ffrLogo" /></NavLink></li>
        <li id="about" className="NHGT"><NavLink to="/about" className="w">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
