import React from "react";
import "./SigninSignup.scss";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SigninSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignup;
