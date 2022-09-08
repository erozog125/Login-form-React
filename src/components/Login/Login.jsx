import React,{ useState, useEffect, useRef } from 'react';
import { useRef } from 'react';
import { BiShowAlt, BiHide } from 'react-icons/bi';

// https://tailwindcss.com/docs/border-style

export const Login = () => {

  const [showPass, setShowPass] = useState(false);
  const [ typePass, setTypePass ] = useState('pass');
  const pass = useRef(null);
  const confirmPass = useRef(null);

  let iconPass;
  let type;
  
  
    if (showPass) {
      iconPass = <BiHide onClick={()=> setShowPass(!showPass)} className='show-pass' />;
      type="text"
    } else {
      iconPass = <BiShowAlt onClick={()=> setShowPass(!showPass)} className='show-pass' />;
      type="password"
    } 

    useEffect(() => {
      if (pass === confirmPass) {
        console.log('Funciona');
      } else {
        console.log('Funciona');
      }
    }, [pass, confirmPass])
    
    
  return (
    <div className='div-login'>
      <h2 className='font-bold text-cyan-500 text-7xl'>Login</h2>
      <form className='form-login' action="" onSubmit={()=> console.log('Funciona')}>
        <div className='div-pass' >
          <input className='input-pass' ref={pass} type={type} id='password' name='password' placeholder="password" />
          {iconPass}
        </div>        
        <div className='div-pass' >
          <input className='input-pass' ref={confirmPass} type={type} id='password' name='password' placeholder="confirm password" />
          {iconPass}
        </div>        
      </form>
    </div>
  )
}
