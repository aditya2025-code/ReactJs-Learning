import React from 'react'
import { Link } from 'react-router-dom'

const Men = () => {
    return (
        <div>
            <Link to='/product/men/shoes'>
                <h2>Men's Collection</h2>
            </Link>

            <p>Click on Men's Collection</p>

        </div>
    )
}

export default Men