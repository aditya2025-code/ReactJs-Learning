import { useState } from 'react'

import React from 'react'

const App = () => {

  const user3 = JSON.parse(localStorage.getItem('user3'))
  console.log(user3);
  
  

  return (
    <div>App</div>
  )
}

export default App