import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <Switch>
      <Route path="/about">{/*<About />*/}</Route>
      <Route path="/shopping" exact>
        <ProductListPage />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
