import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/mattProfilePic.jpg";
import Social from "../components/Social/socialBar";

class Home extends Component {
  render() {
    return (
      <div className="containerDiv home">
        <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
        <ReactTypingEffect
          className="ReactTypingEffect"
          text={[
            "Hi there!",
            "My name is Matt Hiatt and I am looking for a career in fullstack development.",
          ]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;
