import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.sass";
import Header from "./Header";
import Home from "./Home";
import Page from "./Page";
import Random from "./Random";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header />
        </header>
        <section className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movies">
              <Page />
            </Route>
            <Route path="/series">
              <Page />
            </Route>
            <Route path="/random">
              <Random />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
