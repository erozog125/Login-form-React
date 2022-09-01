import React from 'react';

// https://tailwindcss.com/docs/border-style

export const Login = () => {

  const handleLogin = (e) => {
    e.preventDefault();    
  }

  return (
    <div className='w-screen flex justify-center items-center'>      
      <form className='m-10 p-5 w-auto rounded-xl border-double border-2 border-indigo-700 flex flex-col items-center justify-center' action="" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="username">
          <input className='input-username' type="text" id='username' name='username' placeholder="username" onChange={(e)=>setUserName(e.target.value)} />
        </label>
        <label htmlFor="password">
          <input id='password' className='input-password' type="password" name='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
        </label>        
        <button className='btn-login'>Login</button>
      </form>
    </div>
  )
}
