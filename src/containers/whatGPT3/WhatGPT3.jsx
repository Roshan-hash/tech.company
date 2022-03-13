import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is tech." text="Tech. has been recognized by a young and dynamic group of people. It has been serving local, national and worldwide clients with quality based services. We help our clients succeed in creating the brand identity digital experience and the printing method that communicate clearly active in the marketing goals." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Web Design & Development" text="We provide the best Website development services. Our Website developer can be successfully completed more website development . We deliver to services such as: website development, UX/UI development , email template development" />
      <Feature title="Digital Marketing & SEO" text="We have dedicated SEO expert team to deliver search engine optimization services. We uses latest techniques in SEO optimization internet marketing, digital marketing, social SEO optimization, keyword research and organic SEO for guaranteed results on google, bing, yahoo etc." />
      <Feature title="E-Commerce Website Development" text="An online e-commerce site is not just a website that sells products and services, it is a complex system that handles orders, payments, shipping, resources, inventory, taxes, offers, reports, coupons and much more. As an online store and E-commerce website development company." />
    </div>
  </div>
  )
}

export default WhatGPT3