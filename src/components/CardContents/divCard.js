import React, { Component } from "react";
import "./divCardStyles.css";

class DivCard extends Component {
  render() {
    return (
      <div className="divCard">
        <div className="divCont">
          <h3>{this.props.title}</h3>
          <h4 className="text">{this.props.where}</h4>
          <h4 className="text">
            {this.props.from} - {this.props.to}
          </h4>
        </div>
      </div>
    );
  }
}

export default DivCard;
