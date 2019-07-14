import React from "react";
import "../sass/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact/:id" component={Contact} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
