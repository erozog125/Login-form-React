import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navBar'>
      <ul className='ul-navBar'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/admin'>Admin</Link></li>               
      </ul>
    </nav>
  )
}
