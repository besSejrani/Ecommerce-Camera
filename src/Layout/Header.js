import React from "react";
import "./header.scss";

import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase-utils";

const Header = ({ currentUser }) => {
  console.log(currentUser);
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
        {currentUser ? (
          <Link className="option" to="" onClick={() => auth.signOut()}>
            Sign Out
          </Link>
        ) : (
          <Link className="option" to="/signin">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
