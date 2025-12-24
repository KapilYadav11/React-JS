import React from 'react'
import Section1 from './components/section1/section1'
//import Section2 from './components/section2/section2'


const App = () => {

  const users = [
    
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Money rewards clarity, patience, and bold decisions made before everyone else understands',
      tag:'Satisfied',
      
    },
    {
      img:'https://images.unsplash.com/photo-1631624220291-8f191fbdb543?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Education builds clarity, confidence, and freedom by transforming curiosity into powerful lifelong knowledge..',
      tag:'Underserved',
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Coding empowers you to convert imagination into real-world solutions through logic, consistency, and creativity',
      tag:'Underbanked',
    },
    {
      img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Discipline is the daily decision to sacrifice comfort today for pride, growth, and success tomorrow.',
      tag:'Undermover',
    },
    {
      img:'https://images.unsplash.com/photo-1766250488365-d9d510e05efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D',
      intro:'Consistency is the quiet power that transforms small daily actions into massive, life-changing results over time.',
      tag:'Relentless',
    }
  ]

  return (
    <div>
        <Section1 users={users}/>
        
    </div>
  )
}

export default App