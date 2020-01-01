import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import SigninSignUp from "../pages/SigninSignup";

import { connect } from "react-redux";
import { SetCurrentUser } from "../actions/user";
import { auth, createUserProfileDocument } from "../Firebase/Firebase-utils";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { SetCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      SetCurrentUser({ currentUser: userAuth });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact/:id" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route path="/signin" component={SigninSignUp} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default connect(null, { SetCurrentUser })(App);
