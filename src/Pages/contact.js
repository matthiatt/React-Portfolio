import React, { Component } from "react";
import Social from "../components/Social/socialBar";

class Contact extends Component {
  render() {
    return (
      <div className="containerDiv">
        <h1 className="h1-topic">Contact Me</h1>
        <h3>Email : mhiatt62@gmail.com</h3>
        <Social />
      </div>
    );
  }
}

export default Contact;
