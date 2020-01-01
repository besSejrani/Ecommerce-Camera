import React from "react";
import "./header.scss";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../Firebase/Firebase-utils";

import CartIcon from "../components/CartIcon";
import CardDropDown from "../components/CardDropdown";

const Header = ({ currentUser, card }) => {
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
        <CartIcon />
      </div>
      {card ? null : <CardDropDown />}
    </div>
  );
};

const mapState = state => ({
  currentUser: state.user.currentUser,
  card: state.card.hidden
});

export default connect(mapState)(Header);
