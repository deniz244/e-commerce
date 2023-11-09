import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Switch>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path="/product">
        <ProductPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
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
