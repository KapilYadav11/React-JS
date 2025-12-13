import React from 'react'
import Card from './components/card'

const App = () => {
  
  return (
    <div className='parent'>
     <Card user="Manan" age={20}  img="https://plus.unsplash.com/premium_photo-1764826536150-20b27adf1ee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
     <Card user="Kush" age={22}img="https://plus.unsplash.com/premium_photo-1764826536125-46111ad9a20d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
     <Card user="Kapil" age={21} img="https://images.unsplash.com/photo-1761892464046-dd9ee385ae90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzOXxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
    
  )
}

export default App