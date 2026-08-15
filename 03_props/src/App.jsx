import React from 'react'
import Card from './components/Card'
import bijoy from './assets/bjjoy.jpg'
import sayan from './assets/sayan.jpg'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Sayan' age={18} img={sayan} />
      <Card user='Aditya' age={20} img='https://avatars.githubusercontent.com/u/233306638?v=4' />
      <Card user='Bijoy' age={19} img={bijoy} />
    </div>
  )
}

export default App
