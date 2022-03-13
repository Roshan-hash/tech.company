import React from 'react'
import './footer.css';
import Facebook from '../../assets/facebook.png';
import Linkedin from '../../assets/linkedin.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';

const mystyle = {
    width: "50%",
    marginLeft: "-50px",
  };

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <h2>tech.</h2>
        <p>Tech. has been recognized by a young and dynamic group of people. It has been serving local, national and worldwide clients with quality based services. The company has gained the reputation among clients because of its excellent service and quality.<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
            <p><a href="#wgpt3">What is tech?</a></p>
            <p><a href="#possibility">Our Team</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
        <div className='social_media_icons'>
          <a href='https://www.facebook.com/Tech-106949715284578'><img style={mystyle} src={Facebook}></img></a>
          <a href='https://www.linkedin.com/in/tech-mates-aa543b234/'><img style={mystyle} src={Linkedin}></img></a>
          <a href='https://www.instagram.com/tech.mates04/'><img style={mystyle} src={Instagram}></img></a>
          <a href='https://twitter.com/Tech204947722?t=ZF2HP8M2cjf_YUybKEGWdQ&s=08'><img style={mystyle} src={Twitter}></img></a>
      </div>
      </div>
      
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Pune, Maharashtra, India</p>
        <p>+91 83292 57610</p>
        <p>techmates04@gmail.com</p>
      </div>
    </div>

    
    <div className="gpt3__footer-copyright">
      <p>Copyright © 2022 | Powered by tech. | Contact us:- <a href="mailto:techmates04@gmail.com">techmates04@gmail.com</a></p>
    </div>
  </div>
  )
}

export default Footer