import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" style={{ textDecoration: "none" }} className="brand-logo">
          Paycart
        </Link>

        <ul className="right">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Registration
            </Link>
          </li>
          <li>
            <Link to="/home" style={{ textDecoration: "none" }}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              My cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
