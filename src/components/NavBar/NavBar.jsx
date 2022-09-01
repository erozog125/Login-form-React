import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='w-screen h-16 flex justify-center items-center bg-slate-500'>
      <ul className='flex justify-center'>
        <li className='mr-10 text-white text-2xl'><Link className='p-5 border-spacing-3 hover:bg-black' to='/'>Home</Link></li>
        <li className='mr-10 text-white text-2xl'><Link className='p-5 border-spacing-3 hover:bg-black' to='/login'>Login</Link></li>
        <li className='mr-10 text-white text-2xl'><Link className='p-5 border-spacing-3 hover:bg-black' to='/register'>Register</Link></li>               
      </ul>
    </nav>
  )
}
