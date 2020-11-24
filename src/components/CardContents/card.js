import React from "react";
import CardInfo from "./cardInfo";

function Card(props) {
  return (
    <div className="inlineCards" onClick={() => props.click(props.objectItem)}>
      <img
        className="cardImg"
        src={props.objectItem.imgSrc}
        alt={props.objectItem.imgSrc}
      />
      {props.objectItem.selected && (
        <CardInfo
          mainTitle={props.objectItem.mainTitle}
          scdTitle={props.objectItem.scdTitle}
          link={props.objectItem.link}
        />
      )}
    </div>
  );
}

export default Card;
