import React from 'react'

const RightCardContent = (props) => {
    //console.log(props.tag)
  return (
   <div className='top-0 left-0 absolute h-full w-full p-9 flex flex-col justify-between'>
            <h2 className=' text-2xl font-extrabold h-10 w-10 bg-white rounded-full py-1 px-3'>{props.id+1}</h2>
            <div className=''>
                <p className='text-lg leading-relaxed mb-10 text-white'>{props.intro}</p>
                <div className='flex gap-2 '>
                    <button className=' h-10 w-full text-xl font-semibold py-1 px-7 text-white bg-blue-300 rounded-full '>{props.tag}</button>
                    <button className='h-10 w-10 text-2xl font-bold bg-blue-300 rounded-full px-2'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>

        </div>
  )
}

export default RightCardContent