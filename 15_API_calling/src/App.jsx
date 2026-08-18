import { useState } from 'react'
import axios from 'axios'
import React from 'react'

const App = () => {
  const [data, setData] = useState([])

  const getData = async ()=>{
    const response =await axios.get('https://fakestoreapi.com/products')
    console.log(response.data);
    
    setData(response.data)
    
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      <div>
        {data.map(function(elem,idx){
          return <h5>{elem.title} {idx}</h5>
        })}
      </div>
    </div>
  )
}

export default App