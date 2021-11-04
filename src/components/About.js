import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
      <h2>About Me</h2>
      <p>Oh wow, I got to choose the content of this paragraph!  Look at me go just typing away.
        Wow, great job me, this content is top tier!
      </p>
      <img src={image} alt="I made this"></img>
  </div>;
}

export default About;
