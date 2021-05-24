import React, {useEffect, useState} from "react";
import "./Navbar.css";
import "antd/dist/antd.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export const Navbar = (props) => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">
          <a className="brand-logo">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Menu
          >
            <Menu.Item key="home">
              <Link to={"/home"}>
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to={"/about"}>
                <span>About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
