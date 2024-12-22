import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
       <div className="logo-container">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3496/3496625.png"
          alt="Logo"
        />
        <h1>Cinema Sphere</h1>
      </div>
      
      <nav>
      <img
          src="https://cdn-icons-png.flaticon.com/512/195/195492.png"
          alt="Logo"
        />
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}        >
          Home
        </NavLink>
       
      </nav>
    </header>
  );
};

export default Header;
