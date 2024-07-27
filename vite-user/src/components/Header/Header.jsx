import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Movie Booking</h1>
      <nav>
        {/* <Link to="/">Home</Link> */}
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
