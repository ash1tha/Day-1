import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-700 shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:ox-6 lg:px-8 '>
          <ul className='flex py-4 space-x-4'>
            <li>
                <NavLink to="/" className='text-white hover:text-gray-400'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/products" className='text-white hover:text-gray-400'>
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink to="/addproduct" className='text-white hover:text-gray-400'>
                    AddProduct
                </NavLink>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar
