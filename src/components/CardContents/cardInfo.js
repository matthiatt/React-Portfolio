import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const cardStyle = useSpring({ opacity: 2, from: { opacity: 1 } });

  return (
    <animated.span className="crdInfo" style={cardStyle}>
      <div className="crdTitle">{props.mainTitle}</div>
      <div className="crdscdTitle">{props.scdTitle}</div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </animated.span>
  );
}

export default CardInfo;
