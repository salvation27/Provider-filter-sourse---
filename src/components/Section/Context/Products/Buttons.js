import React from 'react'

export default function Buttons({handleBtns}) {
  return (
    <div className='btn_wrapper'>
      <button
      onClick={handleBtns}
      value='All'
      >
      All</button>

        <button
        onClick={handleBtns}
        value='react'
        >
        React</button>


      <button 
      onClick={handleBtns}
      value='javascript'>Javascript</button>


    </div>
  )
}