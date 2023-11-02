import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Switch>
      <Route path="/about">{/*<About />*/}</Route>
      <Route path="/shopping" exact>
        <ProductPage />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
