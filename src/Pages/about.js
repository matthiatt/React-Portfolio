import React, { Component } from "react";
import "./aboutStyles.css";

class About extends Component {
  render() {
    return (
      <div className="containerDiv">
        <h1 className="h1-topic">About Me</h1>
        <h1>
          GREAT! NOW I HAVE YOUR ATTENTION! That honestly means so much to me.
          Here is a little bit more about me.
        </h1>
        <h3>
          Full Stack Web <u>Developer</u>
        </h3>
        <br></br>
        <p>
          I'm a full stack engineer with 1+ years of experience. I worked with
          code as an SEO content engineer for a year, and then went back to get
          further education at Northwestern University. I am experienced in
          HTML, JavaScript, CSS, AJAX, jQuery, Express JS, Node JS, SQL,
          MongoDB, and React
        </p>

        <p>
          My dream is to one day start my own business and become an
          entrepreneur. Right now, I am currently working on an e-commerce site
          called the Wire-Doctor. My moto in e-commerce is - if you're not
          buying what they are selling, then you are the product.
        </p>

        <p>
          One of my hobbies is to learn new concepts, ideas, and skills.
          Knowledge is the greatest asset anyone can obtain. Not just for
          self-improvment, but to also educate others to improve communities and
          individual lives. I take challenges head; failure is success in
          progress. I spend my time in quarantine/isolation by learning
          documentation and how to implement those concepts to make my ideas
          come to fruition.
        </p>

        <p>
          When I'm not learning something new chances are I'm playing WoW or
          some Xbox games. Sidenote - I use Pluralsite a lot to learn about
          different code and how to use them the correct way.
        </p>
      </div>
    );
  }
}

export default About;
