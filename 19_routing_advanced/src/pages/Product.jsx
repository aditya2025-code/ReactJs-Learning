import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <Link to='/product/men'>
        <h2>Product</h2>
      </Link>
      <p>Click on product</p>
    </div>
  )
}

export default Product