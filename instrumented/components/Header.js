import React from "react";
import { Link } from "react-router-dom";

const LinkList = ({ path, label }) => (
  <li className="px-4 py-2 m-2">
    <Link to={path}>{label}</Link>
  </li>
);

const Header = ({ routes }) => (
  <div>
    <ul className="container mx-auto flex justify-end">
      {routes.map((l) =>
        l.path === "/search" ? "" : <LinkList path={l.path} label={l.label} />
      )}
    </ul>
  </div>
);

export default Header;
