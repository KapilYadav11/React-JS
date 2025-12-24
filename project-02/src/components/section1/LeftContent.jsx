import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex-col justify-between '>
      <div className='py-8'>
        <h3 className=' mb-7 px-6 text-7xl font-bold leading-[1.1] '>Prospective <br /><span className='px-6 text-gray-400'> Customer </span><br /> Segmentation</h3>
        <p className='text-xl font-medium px-3 text-gray-500'>Becoming a billionaire isn’t luck—<span className='text-xl font-extrabold'>it’s vision, discipline, relentless learning, calculated risks, and the courage</span> to think long-term while others chase short-term comfort.</p>
      </div>
      <div className='text-6xl py-10 '><i className="ri-arrow-right-up-long-fill"></i></div>

    </div>
  )
}

export default LeftContent