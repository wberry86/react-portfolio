import React, { Component } from 'react';
//import Link from 'react-router-dom';


 class Nav extends Component {
   render() {
    return(
        <header>
            <h2>
    <a href="/header">
      <span role="img" aria-label="camera"> 💻</span> Will Berry
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="/about">
          About 
        </a>
      </li>
      <li className="mx-2">
      <a href="/portfolio">
          Portfolio
        </a>
      </li>
      <li className="mx-2">
      <a href="/resume">
          Resume
        </a>
      </li>
      <li className="mx-2">
      <a href="/contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
        </header>
    );
}
 }

export default Nav;