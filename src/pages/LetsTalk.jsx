import React from 'react';
import './lets.css'
import sk from '../assets/Sintítulo-12.png'
const LetsTalk = () => {
  return (
   <div className='talker'>
     <div className='talk'>
      <div className='forms'>
      <h2>LET’S TALK!</h2>
      <input type="text" placeholder='YOUR NAME' />
      <input type="text" placeholder='YOUR E-MAIL' />
      <textarea placeholder='TELL US EVERYTHING' ></textarea>
      </div>
      <div className='ska'>
        <img src={sk} alt="" />
      </div>
    </div>
   </div>
  )
}

export default LetsTalk
