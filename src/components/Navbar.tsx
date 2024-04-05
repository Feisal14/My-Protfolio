import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="toggelButton">
        <button></button>
      </div>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
