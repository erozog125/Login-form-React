import React from 'react';
import { BiShowAlt, BiHide } from 'react-icons/bi';

// https://tailwindcss.com/docs/border-style

export const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();    
  }

  return (
    <div className='div-login'>
      <BiShowAlt />
      <BiHide />      
      <h2 className='font-bold text-cyan-500 text-7xl'>Login</h2>
      <form className='form-login' action="" onSubmit={handleLogin}>
        <label htmlFor="username">
          <input className='input-form' type="text" id='username' name='username' placeholder="username" onChange={(e)=>setUserName(e.target.value)} />
        </label>
        <label htmlFor="password">
          <div className="pass">
            <input type="text" />
          </div>
        </label>        
        <button className='btn-login'>Login</button>
      </form>
    </div>
  )
}
