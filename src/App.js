import React from 'react'
import { Navbar, CTA, Brand } from './components';
import { WhatGPT3, Possibility, Header, Footer, Features, Blog } from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header></Header>
        </div>
        <WhatGPT3></WhatGPT3>
        <Features></Features>
        <Possibility></Possibility>
        <CTA/>
        <Blog></Blog>
        <Footer></Footer>
      
    </div>
  )
}

export default App
