import React, {useEffect, useState} from "react";
import "./Navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {observer} from "mobx-react-lite";
import {useStore} from "../../utils/useStore.js";

const { subMenu } = Menu;
export const Navbar = observer((props) => {
  const store = useStore();
  useEffect(() => {}, []);

  const [setKeys, setSetKeys] = useState(["dashbord"]);

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
          {/* <Menu
            defaultOpenKeys={["sub4"]}
            theme="light"
            style={{
              backgroundColor: "transparent",
              fontWeight: 400,
            }}
            onClick={({ keyPath, item }) => {
              props.closeLeftDrawer();
            }}
            mode="inline"
            selectedKeys={setKeys}
            onSelect={({ setKeys, item, selectedKeys }) =>
              setSetKeys(selectedKeys)
            }
            overflowedIndicator={0}
            forceSubMenuRender={true}
          >
            <Menu.Item key="home">
              <Link to={"/home"}>
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="About">
              <Link to={"/about"}>
                <span>About</span>
              </Link>
            </Menu.Item>
          </Menu> */}
        </div>
      </nav>
    </div>
  );
});

export default Navbar;
