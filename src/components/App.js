import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Random from "./Random";
import Search from "./Search";

const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/movie",
    label: "Film",
  },
  {
    path: "/show",
    label: "Serie",
  },
  {
    path: "/search",
    label: "Search",
    Component: Search,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Header routes={routes} />
        </header>
        <section id="main" className="flex flex-col w-3/4 mx-auto my-12">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route
              path="/:type"
              exact
              render={(routeProps) => (
                <Random {...routeProps} key={document.location.href} />
              )}
            />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
