import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/contact";

const App = () => {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;
