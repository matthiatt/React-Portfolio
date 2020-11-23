import React from "react";
import Jumbo from "../components/Jumbo/jumbo";

// passing data thru the props to display on the Home page when it's pressed.
function Home(props) {
  return (
    <div>
      <Jumbo
        mainTitle={props.mainTitle}
        scdTitle={props.scdTitle}
        msg={props.msg}
      />
      <br />
    </div>
  );
}

export default Home;
