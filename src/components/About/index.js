//import { render } from "@testing-library/react";
import React, { Component } from "react";
import profileImage from "../../assets/large/portraits/profile_pic.jpg";
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
          <span>Hi, my name is Will Berry</span> I am a Driven Full Stack Web Developer with a background in customer service and a Full-Stack Certificate from Vanderbilt University Coding Bootcamp - Nashville.  During the intensive boot camp, I have participated in multiple group projects specifically utilizing  Node.js, Express, Handlebars, SQL, JavaScript, CSS, HTML, React, MySQL, NoSQL, and Apollo.  After building the applications from start to finish my team was able to demo the projects to a group of industry professionals with positive reviews. Enjoy collaborating and working on a diverse team as well as solving problems in high-stress environments.  An articulate individual who enjoys connecting with co-workers and is passionate about building applications that assist everyday people in order to make their lives easier.  Looking to bring my knowledge, communication, and technical skills to an organization while focusing on continuous learning also while engaging in my community to give back in the field of web development.  As a graduate of Vanderbilt University's Full Stack Web Development Certificate program, I have over 100+ hours of experience building full stack applications both individually and in teams and my past academic history includes a Bachelor of Arts in Film Studies from Carson Newman University, with a focus on design and editing. Together with my technical and creative skills combined, I will prove to be a valuable asset to any company looking to hire new talent.  
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
