import React from "react";
import "./CardDropDown.scss";

import CustomButton from "../CustomButton";

const CardDropDown = () => {
  return (
    <div className="card-dropdown">
      <div className="card-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CardDropDown;
