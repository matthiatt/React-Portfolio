import React, { Component } from "react"; //import React from "react"; - Another way to write it - Line : 6.
import { MenuItems } from "./MenuItems"; // Importing the const declared from the MenuItems.js file.
// import { Button } from "./Button"; // Importing the const declared from the Button.js file.
import "./Navbar.css"; // Importing the css file appropriate for this.

// Instead of importing the component, we can simply call it within line 7. You can add it as - 'React.Component'.
class Navbar extends Component {
  state = { buttonClicked: false };
  // using the 'handleClick' event so I can pass the JSX code into the HTML area by wrapping it within, {}(object(s)).
  handleClick = () => {
    // 'handleClick' here since I want to add functionallity to the 'handleClick'.
    // Setting the value to the opposite of what's being clicked.
    this.setState({ buttonClicked: !this.state.buttonClicked });
  };

  render() {
    return (
      <nav className="NavbarContent">
        <h1 className="NavbarLogo">
          React<i className="fab fa-react"></i>
        </h1>
        {/* adding a menu "burger menu" with functionality. The 'fa' is refering to an import in the HTML link in public. For ref, I am using - fontawesome  */}
        <div className="MenuIcon" onClick={this.handleClick}>
          <i
            className={
              this.state.buttonClicked ? "far fa-stop-circle" : "fas fa-bars"
            }
          ></i>
        </div>
        {/* Creating a 'ul' tag becuase I want my array's to return data within this area.  */}
        <ul className={this.state.buttonClicked ? "NavMenu active" : "NavMenu"}>
          {/* To successfully retrieve and retun the data, I must be able to search the data within the array, but in return a new array.*/}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {/* Linking my url href tag I want the property to move the user to. */}
                <a className={item.clsname} href={item.url}>
                  {/* Since 'MenuItems' is called, I need to call the property - 'clsname.' */}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <Button>Press Me</Button> */}
      </nav>
    );
  }
}

export default Navbar; // Exporting this to be used in the app.js file.
