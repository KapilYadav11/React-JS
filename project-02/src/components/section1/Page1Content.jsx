import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props)
  return (
    <div className='py-10 px-15 h-[90vh] flex items-center justify-between gap-12 '>

        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content