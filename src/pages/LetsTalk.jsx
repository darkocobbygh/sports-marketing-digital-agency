import React from 'react';
import './lets.css'

const LetsTalk = () => {
  return (
    <div className='talk'>
      <div className='forms'>
      <h2>LET’S TALK!</h2>
      <input type="text" placeholder='YOUR NAME' />
      <input type="text" placeholder='YOUR E-MAIL' />
      <textarea placeholder='TELL US EVERYTHING' ></textarea>
      </div>
    </div>
  )
}

export default LetsTalk
