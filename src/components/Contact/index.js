import React, { Component } from 'react';
//import contactPainting from "../../assets/cover/painting3.jpg";



class Contact extends Component {
  render () {
  return (
    <section id='contact'>
      <div id="background2">
      <main>
        
        <h1>
          Contact Information
        </h1>
        <h2>
          <ul>
            <li>Email: wberry86@gmail.com</li>
            <li>Phone: 865-250-5940</li>
            <l1>Address: 1009 DavidsonSt. Nashville Tn, 37206</l1>
          </ul>
        </h2>
        
      </main>
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
