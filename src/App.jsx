import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <>
    <NavBar />
      <div className='bg-zinc-900 text-white text-lg w-screen h-screen flex-col items-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />        
          <Route path='/register' element={<SignUp />} />        
        </Routes>        
      </div>    
    </>
  )
}

export default App
