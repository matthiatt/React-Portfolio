import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.span className="crdInfo" style={style}>
      <div className="crdTitle">{props.mainTitle}</div>
      <div className="crdscdTitle">{props.scdTitle}</div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        View
      </a>
    </animated.span>
  );
}

export default CardInfo;
