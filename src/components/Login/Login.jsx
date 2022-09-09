import React,{ useState, useEffect } from 'react';
import { BiShowAlt, BiHide } from 'react-icons/bi';

// https://tailwindcss.com/docs/border-style

export const Login = () => {

  const [showPass, setShowPass] = useState(false);
  const [ pass, setPass ] = useState('');
  const [ confirmPass, setConfirmPass ] = useState('');
  const [ equalPass, setEqualPass ] = useState("");
    
  let iconPass;
  let type;
    
  if (showPass) {
    iconPass = <BiHide onClick={()=> setShowPass(!showPass)} className='show-pass' />;
    type="text"
  } else {
    iconPass = <BiShowAlt onClick={()=> setShowPass(!showPass)} className='show-pass' />;
    type="password"
  } 
  
  const getPass = event => setPass(event.target.value)
  const getConfirmPass = event => setConfirmPass(event.target.value)
  
  useEffect(() => {
    if (pass.length > 0 && confirmPass.length > 0) {
      if (pass === confirmPass) {        
        setEqualPass("Correct!")
      } else {
        setEqualPass("password not matches!")
      }
    }       
    }, [pass,confirmPass])
    
  return (
    <div className='div-login'>
      <h2 className='font-bold text-cyan-500 text-7xl'>Login</h2>
      <form className='form-login' action="" onSubmit={()=> console.log('Funciona')}>
        <div className='div-pass' >
          <input className='input-pass' onChange={getPass} type={type} id='password' name='password' placeholder="password" />
          {iconPass}
        </div>        
        <div className='div-pass' >
          <input className='input-pass' onChange={getConfirmPass} type={type} id='confirm-password' name='password' placeholder="confirm password" />
          {iconPass}
        </div>
        <span>{equalPass}</span>        
      </form>
    </div>
  )
}
