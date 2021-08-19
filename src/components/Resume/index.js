import React, { Component } from 'react';
import linkedInImage from "../../assets/large/portraits/Capture.PNG";
import { Link } from 'react-router-dom';
import Pdf from "../../assets/resume/William_Berry_Resume.PDF";

class Resume extends Component {
    render() {
    return(
        <div id="background">
        <div id="background2">
        <Link to={{ pathname: "https://www.linkedin.com/in/will-berry86" }} target="_blanK">
        <h2>LinkedIn Profile</h2>
        <img
        src={linkedInImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="linkedIn profile"
      />
      </Link>

      <a href = {Pdf} target = "_blank" rel="noreferrer"><h2>Resume</h2></a>
      </div>
      </div>
    )
    }
}

export default Resume;