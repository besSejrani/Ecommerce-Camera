import React from "react";
import "./cartIcon.scss";

import { connect } from "react-redux";
import { toggleCardHidden } from "../../actions/card";

const index = ({ toggleCardHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCardHidden}>
      <img
        src={require(`../../images/shopping-bag.svg`)}
        alt="cart icon"
        className="shopping-icon"
      />
      <span className="item-count">0</span>
    </div>
  );
};

export default connect(null, { toggleCardHidden })(index);
