import { useState } from 'react'
import { useEffect } from 'react'

import React from 'react'

const App = () => {
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(10)
  useEffect(function(){
    console.log('useeffect is running..');
    
  },[num1])

  return (
    <div>
      <h1>{num1}</h1>
      <h1>{num2}</h1>
      <button 
      onMouseEnter={()=>{
        setNum1(num1+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+10)
      }}
      >Hover</button>
    </div>
  )
}

export default App