import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Shows from "./Shows";
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
    Component: Random,
  },
  {
    path: "/shows",
    label: "Serie",
    Component: Shows,
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
