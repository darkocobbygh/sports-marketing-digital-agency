import React from 'react'
import './about.css'
import weare from '../assets/weare.png'
import onli from '../assets/onlin.png'
import exper from '../assets/exper.png'
const AboutUs = () => {
  return (
    <div>
    <div className='about'>
      <h1>ABOUT US</h1>
      <div className='fitness'>
      <p>
      GET YOUR FITNESS <br /> BRAND TO THE DIGITAL <br /> WORLD. <br /> TOGETHER WE CREATE,<br /> WE DESIGN, WE FIT.
      </p>
      </div>
      <div className='we'>
        <h2>WE ARE</h2>
        <div className='we-container'>
        <div className='item-one'>
          <p className='fir'>CONTENT CREATORS AND SOCIAL <br /> MEDIA MANAGERS</p>
          <img src={weare} alt="" />
          <p className='sec'>WEB AND APP DESIGNERS <br /> AND HOSTS.</p>
        </div>
        <div className='item-two'>
          <p className='tex'>ONLINE ADS AND CAMPAIGN CREATORS</p>
          <img src={onli} alt="" />
        </div>
        <div className='item-three'>
          <p className='experts'>EXPERTS IN RESEARCH AND POSITIONING</p>
          <img src={exper} alt="" />
        </div>
      </div>
      
        </div>
    </div>
    
    </div>
  )
}

export default AboutUs
