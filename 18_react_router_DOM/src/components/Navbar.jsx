import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div className='nav'>
                <h2>AdiDas</h2>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar