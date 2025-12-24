import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

export const Section1 = (props) => {
  //console.log(props)
  return (
    <div className='min-h-screen w-screen '> 
    <Navbar />
    <Page1Content users={props.users}/>
    </div>
  )
}

export default Section1
