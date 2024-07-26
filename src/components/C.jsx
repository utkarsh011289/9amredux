"use client"

import React from 'react'

import { useSelector } from 'react-redux'

export const C = () => {

  const { name, loc }=useSelector( ( state ) => {

                    const { name, loc }=state.appReducer
                            
          return { name, loc }
  }  )
  return (
    <div>
      <h1>C</h1>
      <h1>Name:{name}</h1>
      <h1>Location:{loc}</h1>    

    </div>
  )
}
