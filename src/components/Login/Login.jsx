import React,{ useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import { Admin } from '../Admin/Admin';

export const Login = () => {

  const users = [
    {username: "edwin.rozo", password:"clave1"},
    {username: "juan.castro", password:"clave2"},
    {username: "ana.mora", password:"clave3"},
    {username: "leandra.suarez", password:"clave4"},
  ];

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);    
    setIsLogin(users.some( user => user.username === username && user.password === password ));    
  }

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin])  

  return (
    <div className='div-signup'>
      <Routes>
          <Route path='/' render={()=>{
            return isLogin ? <Admin /> : null;
          }}></Route>
      </Routes>
      <form action="" onSubmit={handleLogin}>
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
