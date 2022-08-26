import React, { useState,useEffect } from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import axios from 'axios';

export const SignUp = () => {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const URL_User = "https://backend-edw.herokuapp.com/usuario";
  const URL_Users = "https://backend-edw.herokuapp.com/usuarios";

  const handleRegister = (event) => {

    event.preventDefault();    
    axios.get(URL_Users)
    .then( response => setUsers(response))

    if (password === confirmPassword) {
      console.log(users.data[0]);
      const isExist = users.data.map( user => {
        if (user[1] === username && user[2] === password) {
          return true;
        }
      });
      isExist ? console.log('Usuario Ya existe') : console.log('Usuario no existe');
    }
  }

  useEffect(() => {
    console.log(username);
  }, [username])

  useEffect(() => {
    console.log(name);
  }, [name])

  useEffect(() => {
    console.log(password);
  }, [password])

  useEffect(() => {
    console.log(confirmPassword);
  }, [confirmPassword])
  
  return (
    <div className='div-signup'>
      <form action="" onSubmit={handleRegister}>
        <h2>Create Account</h2>
        <label htmlFor="name">           
          <input className='input-username' onChange={e => setName(e.target.value)} type="text" name='name' placeholder="name" />
        </label>
        <label htmlFor="username">           
          <input className='input-username' onChange={e => setUsername(e.target.value)} type="text" name='username' placeholder="username" />
        </label>
        <label htmlFor="password">          
          <input type="password" name='password' onChange={e => setPassword(e.target.value)} placeholder='Password' />
        </label>
        <label htmlFor="confirmPassword">          
          <input type="password" name='confirmPassword' onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />
        </label>
        <button className='btn-signup'>Sign Up</button>
        <a className='a-account' href="">I have an account</a>
      </form>
    </div>
  )
}
