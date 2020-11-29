import React, { Component } from "react";
import "./skillsStyles.css";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillList: [
        "HTML",
        "CSS",
        "JS",
        "jQuery",
        "Ajax",
        "Node.js",
        "React",
        "SQL",
        "Mongodb",
        "MERN",
      ],
    };
  }

  render() {
    return (
      <div className="containerDiv skills">
        <h1 className="h1-topic">List of code languages I know.</h1>
        <ul>
          {this.state.skillList.map((value) => {
            return <li>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
