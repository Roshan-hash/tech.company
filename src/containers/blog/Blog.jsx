import React from 'react'
import './blog.css';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 26, 2022" text="Lets Build your dream into Reality" Desc="We provide digital experience services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents. We work with you, not for you. Although we have a great resources.Tech. is a group of professional Website Designers & Developers, Software Developers and SEO Experts. We provide awesome Web Designing Services and SEO Services.We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.If you want to make more money in business and create a different identity in the world of your business, you must contact one at a time, an experienced team is waiting for you, to make your dreams come true." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Feb 01, 2022" text="Digital Marketing & SEO. Let us exlore how it is?" Desc="Our next generation developers converts your website into powerful business channeluses latest techniques in SEO optimization internet marketing, digital marketing, social SEO optimization, keyword research and organic SEO for guaranteed results on google, bing, yahoo etc. SEO helps business owners to create fast, robust, and user-friendly website increases conversion rates." />
        <Article imgUrl={blog03} date="Feb 06, 2022" text="E-commerce is the future. Let us exlore how it is?" Desc="An online e-commerce site is not just a website that sells products and services, it is a complex system that handles orders, payments, shipping, resources, inventory, taxes, offers, reports, coupons and much more. As an online store and E-commerce website development company, we have been developing and managing online stores for over 2+ years already." />
        <Article imgUrl={blog04} date="Feb 28, 2022" text="Website Design . Let us exlore how it is?" Desc="We includes the whole process of website developing, creating, and enhancing the look and feel of the content shown on a web page. Website Design is important as this will be the first time a lot of your customers learn anything about you. It's critical that you make a great first impression." />
        <Article imgUrl={blog05} date="Mar 14, 2022" text="Responsive Website Design. Let us exlore how it is?" Desc="As per a survey most of the website are acessed using mobile devices like smartphones, tablets, laptops etc, hence it becomes necessary to provide user with a userfriendly mobile ready front-end that they would love to look for. We provides you affordable responsive website design services that can help you to grow your business and allow you to reach large number clients easily." />
      </div>
    </div>
  </div>
  )
}

export default Blog