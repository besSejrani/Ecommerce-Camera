import React from "react";
import { StyledButton } from "./custom-button.styles";

//import "./custom-buttom.styles.scss";

const CustomButton = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default CustomButton;
