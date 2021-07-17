import React, { Component  } from "react";
import coverImage from "../../assets/cover/cover-image.jpg";


class Header extends Component {
  render() {
    return (
      <div>
        <h1>Hello this is Will Berry's professional portfolio. Welcome</h1>
        <a href='/about'>
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "100%" }}
          alt="cover"
        />
        </a>
      </div>
    );
  }
}

export default Header;