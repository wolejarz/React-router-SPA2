import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "Start", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
  { name: "Admin", path: "/login" },
];
export default function Navigation() {
  const navlist = list.map((element) => (
    <li key={element.name}>
      <NavLink exact to={element.path}>
        {element.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="main">
      <ul>{navlist}</ul>
    </nav>
  );
}
