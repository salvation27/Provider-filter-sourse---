import React from 'react'
import './Serch.css'

const Serch = ({handelInput}) => {
  
 
  return (
    <div className='serch_box'>
      <input 
      type="text"
      placeholder="Поиск"
      onChange ={handelInput}
      />
    </div>
  )
}

export default Serch
