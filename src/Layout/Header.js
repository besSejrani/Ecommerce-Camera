import React from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={require("../images/crown.svg")} alt="" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
