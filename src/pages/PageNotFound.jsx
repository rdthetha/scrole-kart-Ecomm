import React from 'react'
import logo from '../image/scrolekart logo.svg'
export default function PageNotFound() {
  return (
      <div className='error-page-div'>
          <img src={logo} alt="logo"className="error-page-logo"/>
          <div className='h1'>404</div>
          <div className='h6'>The resource requested could not be found in the server!</div>
      </div>
    
  )
}
