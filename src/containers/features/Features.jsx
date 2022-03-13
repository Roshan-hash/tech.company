import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
    {
      title: 'Customizable Themes',
      text: 'Our CMS based solution helps you update your website content easily. Our Solution helps you to create your website ready in few days.',
    },
    {
      title: 'SEO Friendly Websites',
      text: 'SEO helps business owners to create fast, robust, and user-friendly website design that rank higher in search engines, which in turn helps bring more qualified potential customers to their sites and eventually increases conversion rates',
    },
    {
      title: 'Secured Websites & Free Updates & Support',
      text: 'We can always restore your website if any disaster attack happens. Our team provides Free Updates & 24*7 support to our clients.',
    },
    {
      title: 'Bugs free Websites',
      text: '100% bugs and errors free which will help your business running 24 hours. We provide fast loading Websites which helps your customer to impress.',
    },
  ];
  

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features