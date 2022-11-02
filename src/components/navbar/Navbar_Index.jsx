import React from 'react';
import './Navbar_Style.scss';

const Navbar_Index = () => {
  return (
    <div className="navbar">
      <div className="nav_container">
        <span className="logo">BookTRIP</span>
        <div className="nav_items">
          <button className="nav_button">Login</button>
          <button className="nav_button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar_Index;
