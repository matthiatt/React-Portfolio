import React, { Component } from "react";
import "./socialStyle.css";

class SocialBar extends Component {
  render() {
    return (
      <div class="socialBar">
        <a
          href="https://github.com/matthiatt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/matt-hiatt-852a71106/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
    );
  }
}

export default SocialBar;
