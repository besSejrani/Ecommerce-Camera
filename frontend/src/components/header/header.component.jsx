import React from "react";
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderOptions,
  StyledOptionLink
} from "./header.styles";

import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <StyledHeader>
    <StyledHeaderLogo to="/">
      <Logo className="logo" />
    </StyledHeaderLogo>

    <StyledHeaderOptions>
      <StyledOptionLink to="/shop">SHOP</StyledOptionLink>
      <StyledOptionLink to="/shop">CONTACT</StyledOptionLink>
      {currentUser ? (
        <StyledOptionLink as="div" onClick={() => signOutStart()}>
          SIGN OUT
        </StyledOptionLink>
      ) : (
        <StyledOptionLink to="/signin">SIGN IN</StyledOptionLink>
      )}

      <CartIcon />
    </StyledHeaderOptions>
    {hidden ? null : <CartDropdown />}
  </StyledHeader>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, { signOutStart })(Header);
