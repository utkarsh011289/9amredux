'use client'
import React , { useState} from 'react'

export const B = () => {

  const [loc,setLoc] = useState()

  const handleChange = (eve) =>{
       
    setLoc(eve.target.value)
  }

  const handleClick = () =>{
         alert(loc)
  }

  return (
    <div>

      <h1>B</h1>
          <p>
            <b>Location: </b> <input onChange={handleChange} /> <button  onClick={handleClick}>Submit </button>
          </p>

    </div>
  )
}
