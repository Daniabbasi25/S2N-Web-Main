import React from 'react'
import { Children } from 'react'
import './style.css'
const Container = ({children}) => {
  return (
    <div className='WhiteContainer'>
{children}
    </div>
  )
}

export default Container