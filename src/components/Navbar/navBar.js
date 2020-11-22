import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarContent">
        <h1 className="NavbarLogo">React</h1>
        <div className="MenuIcon"></div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.clsname} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
