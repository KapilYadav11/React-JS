import React from 'react'

const card = (props) => {
    console.log(props)
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <h4>is {props.age}yr old</h4>
        <p>Learning about the React js , this will help in frontend technologies</p>
        <button>View profile</button>
      </div>
  )
}

export default card