import React, { Component } from "react";
import DivCard from "../components/CardContents/divCard";
import "./educationStyles.css";

class Education extends Component {
  render() {
    return (
      <div className="containerDiv">
        <h1 className="h1-topic">My Education</h1>
        <DivCard
          title="Certified Code Specialist"
          where="Northwestern University"
          from="September 2020"
          to="December 8th, 2020"
        />
        <DivCard
          title="English Education"
          where="Illinois State University"
          from="2011"
          to="2017"
        />
        <DivCard
          title="Political Science"
          where="Illinois State University"
          from="2017"
          to="2018"
        />
      </div>
    );
  }
}

export default Education;
