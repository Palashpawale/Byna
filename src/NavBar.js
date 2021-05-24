import React from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';

function NavBar() {
    return <> 
    <nav className="navbar">
        <div className="nav-container">
      <NavLink exact to="/" className="nav-logo">
          Tenant Portal 
      </NavLink>
    

    <ul className="nav-menu">
        <li className="nav-item">
    <NavLink exact to="/Home" className="nav-links">
          Home
      </NavLink>
      </li>
     
      <li className="nav-item">
    <NavLink exact to="/My request" className="nav-links">
          My request
      </NavLink>
      </li>

      <li className="nav-item">
    <NavLink exact to="/Payment" className="nav-links">
          Payment
      </NavLink>
      </li>

      <li className="nav-item">
    <NavLink exact to="/My Document" className="nav-links">
          My Document
      </NavLink>
      </li>


      <li className="nav-item">
    <NavLink exact to="/Contact Us" className="nav-links">
          Contact Us
      </NavLink>
      </li>

    </ul>
    </div>
    </nav>
    </>
}

export default NavBar;