import React from "react";
import { Link } from "react-router-dom";

const LinkList = ({ path, label }) => (
  <li className="px-4 py-2 ml-2  my-2 bg-teal-400">
    <Link to={path}>{label}</Link>
  </li>
);

const Header = ({ routes }) => (
  <div className="bg-teal-700 border-b border-gray-800 shadow-lg">
    <ul className="container mx-auto flex justify-end">
      {routes.map((l, i) =>
        l.path === "/search" ? (
          ""
        ) : (
          <LinkList path={l.path} label={l.label} key={`link-${i}`} />
        )
      )}
    </ul>
  </div>
);

export default Header;
