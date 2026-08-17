import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  function submitted(e){
    e.preventDefault();
    console.log('Submitted by',title);
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitted(e);
      }}>
        <input type="text" placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App