import React from "react";
import { Link } from "react-router-dom";
import "./Header.sass";

class Header extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/series">Serie</Link>
        </li>
        <li>
          <Link to="/random">Random</Link>
        </li>
      </ul>
    );
  }
}

export default Header;
