import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Page from "./Page";
import Random from "./Random";
import Search from "./Search";

const routes = [
  {
    path: "/",
    label: "Home",
    Component: Home,
  },
  {
    path: "/movies",
    label: "Film",
    Component: Page,
  },
  {
    path: "/series",
    label: "Serie",
    Component: Page,
  },
  {
    path: "/random",
    label: "Random",
    Component: Random,
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
        <section className="main flex flex-col w-3/4 mx-auto my-12 items-center">
          <Switch>
            {routes.map(({ path, Component }, i) => (
              <Route
                key={`route-${i}`}
                exact
                path={path}
                component={({ history }) => {
                  return <Component />;
                }}
              />
            ))}
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
