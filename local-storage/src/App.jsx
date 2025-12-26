import React from 'react'

const App = () => {
  

  


  const user = {
    username: 'kapil',
    city:'bhopal',
    age: 20
  }
  localStorage.setItem('user', JSON.stringify(user));
  const use1 = JSON.parse (localStorage.getItem('user'))
  console.log(use1) 

  return (
    <div>App</div>
  )
}

export default App


// four method/ functionality of local storage are
// setItem
// getItem
// removeItem
// clearItem

// JSON.stringify helps in to convert the data into the stringify
// JSON.parse helps in to to get the data retrieve