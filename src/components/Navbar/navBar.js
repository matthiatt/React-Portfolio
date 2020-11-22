import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { buttonClicked: false };

  handleClick = () => {
    this.setState({ buttonClicked: !this.state.buttonClicked });
  };

  render() {
    return (
      <nav className="NavbarContent">
        <h1 className="NavbarLogo">
          React<i className="fab fa-react"></i>
        </h1>
        {/* adding a menu "burger menu" with functionality. The fa strings are coming from an import in the HTML link in public. I am using icons from fontawesome  */}
        <div className="MenuIcon" onClick={this.handleClick}>
          <i
            className={
              this.state.buttonClicked ? "far fa-stop-circle" : "fas fa-bars"
            }
          ></i>
        </div>
        <ul className={this.state.buttonClicked ? "NavMenu active" : "NavMenu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
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
