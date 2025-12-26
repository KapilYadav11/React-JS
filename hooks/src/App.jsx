import React, { useState } from 'react'

const App = () => {

  const [tittle, setTittle] = useState('')

   const handlerSubmit = (e) =>{
    e.preventDefault()
    console.log("form submitted by" , tittle)
    setTittle('')
   }
  
   
  return (
    <div>
      <form onSubmit={ (e) =>{
        handlerSubmit(e)
      }}>
        <input type="text" placeholder='Enter your name'
        value={tittle}
        onChange={(e)=>{
        
         setTittle(e.target.value)        

        }}
        />
        <button>Submit</button>
      </form>
      
    </div>
  )
}

export default App