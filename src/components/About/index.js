//import { render } from "@testing-library/react";
import React, { Component } from "react";
import profileImage from "../../assets/large/portraits/profile2.jpg";
//import paintingTwo from "../../assets/cover/painting2.jpg";

class About extends Component {
  render() {
  return (
    <section>
      <div id="background2">
      <div className="my-2">
      <a href='/about'>
      <img
          src={profileImage}
          className="my-2"
          style={{ width: "100%", padding: "30px" }}
          alt="cover"
        />
        </a>
        <h4 id="about">
          <span>Hi, my name is Will Berry</span> I am currently looking for a
          career in web development and have experience using HTML, CSS, and
          JavaScript. I received my technical skills while attending Vanderbilt
          Coding Boot-Camp and would be interested in helping companies set up
          websites via the use of HTML and CSS. I would also like to help debug
          and streamline code in a more efficient manner. My past academic
          history includes a Bachelor of Arts in Film Studies from Carson Newman
          University, with a focus on: computer design, editing, an introduction
          to media law and ethics, story-boarding, video and audio editing,
          marketing and advertisement, creation of movie posters, editing and
          filming of trailers, creation of websites, and the design and
          implementation of company logos. Together with my technical and
          creative skills combined, I should prove to be a valuable asset to any
          company looking to hire new talent.
        </h4>
        {/* <img
          src={paintingTwo}
          className="my-2"
          style={{ width: "95%" }}
          alt="cover"
        /> */}
      </div>
      </div>
    </section>
  );
  }
}

export default About;
