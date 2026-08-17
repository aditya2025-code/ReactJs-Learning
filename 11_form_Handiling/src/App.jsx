import React from 'react'

const App = () => {

  const submitted = (e) =>{
    e.preventDefault();
    console.log('Submitted');
    
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitted(e);
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App