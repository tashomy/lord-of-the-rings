import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div className="logo">
        <div id="logo">
          <Link to="/">
            <img src={logo}></img>
          </Link>
        </div>
      </div>

      <div className="nav" id="nav">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/moviesList">
            <li>Movies List</li>
          </Link>
          <Link to="/movieDetails">
            <li>Movie details</li>
          </Link>
          <Link to="/contacts">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
