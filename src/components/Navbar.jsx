import React from "react";

const Navbar = () => {
  return (
    <nav className="container">
      <img src="images/brand_logo.png" alt="logo" />
      <ul>
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">CONTACT</li>
        <li href="#">ABOUT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
