import React, { Component } from "react";
import "./signIn.scss";

import { signInWithGoogle } from "../../Firebase/Firebase-utils";
import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

export class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  changeInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2 className="title">I already have an account</h2>
        <h4>Sign in with your email and password</h4>

        <form onSubmit={this.onFormSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            changeInput={this.changeInput}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            changeInput={this.changeInput}
            label="Password"
            required
          />

          <div className="button">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
