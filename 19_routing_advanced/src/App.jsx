import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import Shoes from './pages/Shoes'
import Notfound from './Notfound'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product/>} />
        <Route path='/product/men' element={<Men/>} />
        <Route path='/product/men/shoes' element={<Shoes/>} />

        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<Notfound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App