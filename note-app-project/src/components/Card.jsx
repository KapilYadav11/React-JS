import React from 'react'

const Card = ({task}) => {
  return (
    <div className=' h-135 py-9 flex gap-8 lg:w-1/2 ml-180 -mt-135 rounded-4xl bg-gray-900 flex-wrap'>
    <div className=' text-4xl flex -py-10 text-white'>
        <h1 className='font-semibold  px-6'><span className='inline-block h-2  transition-all duration-300 hover:scale-120  hover:text-gray-700'>Your Notes:</span></h1>
    </div>
     {task.map(function(elem,idx){
      return <div key={idx} className=' py-2  h-32 w-32 rounded-2xl text-black p-4 bg-white'>
        <h3 className='leading-tight text-xl font-bold'>{elem.tittle}</h3>
        <p className=' mt-2 leading-tight font-medium text-gray-500'>{elem.details}</p>
      </div>
     })}
    </div>
  )
}

export default Card