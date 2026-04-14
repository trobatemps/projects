import React from "react";

const NavbarMain = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><a href="http://localhost:5173/">Home</a></li>
          <li><a href="http://localhost:5173/about">About</a></li>
          <li><a href="http://localhost:5173/store">Products</a></li>
          <li><a href="http://localhost:5173/contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarMain;
