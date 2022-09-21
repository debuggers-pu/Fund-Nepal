import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbox from './shared/Searchbox'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-green-500 text-white py-2 px-10 '>
        <h1 className='font-bold text-xl '>Fund Nepal</h1>
        <Searchbox/>
       <NavLink to='/auth/login'>
       <button className='px-4 py-2 bg-white text-primaryColor hover:opacity-75 rounded-sm border-none'>Login</button>
       </NavLink>
    </div>
  )
}

export default Navbar