import React, { Component } from 'react';
import linkedInImage from "../../assets/large/portraits/Capture.PNG";

class Resume extends Component {
    render() {
    return(
        <div>
        <div id='resume'>Resume goes here</div>
        <a
        href="https://www.linkedin.com/in/will-berry86"
      >
        <h2>LinkedIn Profile</h2>
        <img
        src={linkedInImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="linkedIn profile"
      />
      </a>
      </div>
    )
    }
}

export default Resume;