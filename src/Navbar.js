import "./App.css";
import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="content">
        <div className="links">
          <a href="/home">Home</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
