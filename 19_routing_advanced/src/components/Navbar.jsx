import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex item-center justify-between py-4 px-8 bg-cyan-900'>
      <h1 className='text-2xl font-bold'>ADIDAS</h1>
      <div className='flex gap-10'>

        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>

      </div>
    </div>
  )
}

export default Navbar