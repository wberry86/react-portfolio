import React, { Component } from "react";
import passwordImage from "../../assets/project/images/password.PNG";
import workdayImage from "../../assets/project/images/workday.PNG"
import robotImage from "../../assets/project/images/robot.PNG";
import dogMapsImage from "../../assets/project/images/dog-maps-screenshot.PNG";
import readmeImage from "../../assets/project/images/readme-capture.PNG";
import employeeImage from "../../assets/project/images/employee.png";
import socialNetworker from "../../assets/project/images/social.PNG";
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
  return (
    <div>
    <h2 id="portfolio-heading">Following is a list of projects completed during Vanderbilt Coding Bootcamp</h2>
    <div id="portfolio" className="my-2">
    <Link to={{ pathname: "https://wberry86.github.io/code-generator/" }} target="_blank">
        <h3>Password-Generator</h3>
        <img
        src={passwordImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 1"
      />
      </Link>
      <Link to={{ pathname: "https://github.com/wberry86/code-generator/" }} target="_blank">Link to GitHub page</Link>
      <br/>
      <br/>
      <br/>
      <Link to={{ pathname: "https://wberry86.github.io/work-day-scheduler/" }} target="_blank">
        <h2>Code-Refactor</h2>
        <img
        src={workdayImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 2"
      />
      </Link>
      <Link to={{ pathname: "https://github.com/wberry86/work-day-scheduler" }} target="_blank">Link to GitHub page</Link>
      <br/>
      <br/>
      <br/>
      <Link to={{ pathname: "https://wberry86.github.io/robot-gladiators/" }} target="_blank">
        <h2>Robot-Gladiators</h2>
        <img
        src={robotImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 3"
      />
      </Link>
      <Link to={{ pathname: "https://github.com/wberry86/robot-gladiators" }} target="_blank">Link to GitHub page</Link>
      <br/>
      <br/>
      <br/>
      <Link to={{ pathname: "https://wberry86.github.io/dog-maps/" }} target="_blank">
        <h2>Dog-Maps Group Project</h2>
        <img
        src={dogMapsImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 4"
      />
      </Link>
      <Link to={{ pathname: "https://github.com/wberry86/dog-maps" }} target="_blank">Link to GitHub page</Link>
      <br/>
      <br/>
      <br/>
      <Link to={{ pathname: "https://github.com/wberry86/professional-README-generator" }} target="_blank">
        <h2>Professional-README-Generator</h2>
        <img
        src={readmeImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 5"
      />
      </Link>
      <br/>
      <br/>
      <br/>
      <Link to={{ pathname: "https://github.com/wberry86/employee-tracker" }} target="_blank">
        <h2>Employee-Manager</h2>
        <img
        src={employeeImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 6"
      />
      </Link>
      <br/>
      <br/>
      <br/>
      <Link to={{ pathname: "https://social-networker.herokuapp.com/" }} target="_blank">
        <h2>Social-Networker</h2>
        <img
        src={socialNetworker}
        className="my-2"
        style={{ width: "100%" }}
        alt="project 7"
      />
      </Link>
      <Link to={{ pathname: "https://github.com/JosephSuvak/The-Social-Network" }} target="_blank">Link to GitHub page</Link>
    </div>
    </div>
  );
  }
}

export default Portfolio;
