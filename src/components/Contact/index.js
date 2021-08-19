import React, { Component } from 'react';
//import contactPainting from "../../assets/cover/painting3.jpg";



class Contact extends Component {
  render () {
  return (
    <section id='contact'>
      <div id="background2">
      <address>
        
        <h1>
          Contact Information
        </h1>
        <h2>
          <ul>
            <li><a href="mailto:wberry86@gmail.com">Email: wberry86@gmail.com</a></li>
            <li><a href="tel:8652505940">Call: 865-250-5940</a></li>
          </ul>
        </h2>
        
      </address>
      </div>
      
       {/* <a href='/about'>
        <img
          src={contactPainting}
          className="my-2"
          style={{ width: "100%", padding: "20px"}}
          alt="cover"
        />
        </a>  */}
    </section>
  );
}
}

export default Contact;
