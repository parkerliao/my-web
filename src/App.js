import React from "react";
import logo from "./logo.svg";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Blog from "./Pages/Blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Redirect from="/home" to="/"></Redirect>
        <Route path="/about" component={About}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/blog" component={Blog}></Route>
      </Switch>
    </Router>
  );
}

export default App;
