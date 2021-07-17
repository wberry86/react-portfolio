import React, { Component } from "react";
import runBuddyImage from "../../assets/project/images/run-buddy.PNG";
import horiseonImage from "../../assets/project/images/horizeon-capture.PNG";
import robotImage from "../../assets/project/images/robot-gladiator-capture.PNG";
import dogMapsImage from "../../assets/project/images/dog-maps-screenshot.PNG";
import devtraxImage from "../../assets/project/images/devtrax1.PNG";
//import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
  return (
    <div>
    <h4 id="portfolio">Following is a list of projects completed during Vanderbilt Coding Bootcamp</h4>
    <div id="portfolio" className="my-2">
      <a href="https://wberry86.github.io/run-buddy/" className="container-1">
        <h2>Run-Buddy (HTML and CSS)</h2>
        <img
        src={runBuddyImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 1"
      />
      </a>

      <a
        href="https://wberry86.github.io/horiseon-code-refactor/"
        className="container-2"
      >
        <h2>Code-Refactor (HTML and CSS)</h2>
        <img
        src={horiseonImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 2"
      />
      </a>

      <a
        href="https://wberry86.github.io/robot-gladiators/"
        className="container-3"
      >
        <h2>Robot-Gladiators (JavaScript)</h2>
        <img
        src={robotImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 3"
      />
      </a>

      <a href="https://wberry86.github.io/dog-maps/" className="container-4">
        <h2>Dog-Maps Group Project</h2>
        <img
        src={dogMapsImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 4"
      />
      </a>

      <a
        href="https://infinite-shore-33875.herokuapp.com/profile?code=VB9laabnVP1de08b&state=n6FLed5btot1CuHw2AXGPDrT"
        className="container-5"
      >
        <h2>Devtrax Group Project</h2>
        <img
        src={devtraxImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 5"
      />
      </a>

      <a
        href="https://www.google.com"
        className="container-6"
      >
        <h2>Add 6th project here</h2>
        <img
        src={devtraxImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 6"
      />
      </a>
    </div>
    </div>
  );
  }
}

export default Portfolio;
