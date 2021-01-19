// REACT IMPORTS
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// IMPORT COMPONENTS
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Recipe from "./components/Recipe";
import Category from "./components/Category";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/category/:name" children={<Category />}></Route>
        <Route path="/recipe/:id" children={<Recipe />}></Route>
        <Route path="/search/:query" children={<Search />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
