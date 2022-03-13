import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/Circle-chart.png';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Our Team is there support you.</h4>
      <h1 className="gradient__text">Good Advertisment <br /> Good business</h1>
      <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.
We care your business and guarantee you to achieve marketing goals.</p>
      <h4>We know that good advertisment means good business.</h4>
    </div>
  </div>
  )
}

export default Possibility