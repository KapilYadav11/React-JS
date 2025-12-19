import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {
  console.log(props.company)
  return (
    <div>
          <div className='card'>
        <div className='top'>
          <img src={props.logo} alt="" />
          <button>Save <Bookmark /></button>
        </div>

        <div className='center'>
          <h2>{props.company}<span><h5>{props.posted}</h5></span></h2>
          <h2>{props.role}</h2>
          <div>
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>

        <div className='bottom'>
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now </button>  

        </div>
      </div>
    </div>
  )
}

export default Card