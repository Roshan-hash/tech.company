import React from 'react';
import people from '../../assets/Members.png';
import ai from '../../assets/web.png';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with tech.</h1>
      <p>We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Our team is there to support our clients 24*7.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  )
}

export default Header