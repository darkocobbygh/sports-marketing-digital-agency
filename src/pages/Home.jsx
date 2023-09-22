import React from 'react'
import './home.css'
import fit from '../assets/Sintítulo-11.png'
const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
      <img src={fit} alt="" />
      <p>MAKING YOUR BRAND <span className='fits' >FIT</span></p>
      </div>
    </div>
  )
}

export default Home
