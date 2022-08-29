import { Routes, Route } from 'react-router-dom';
import { Admin } from './components/Admin/Admin';
import { Login } from './components/Login/Login';
import { NavBar } from './components/NavBar/NavBar';
import { SignUp } from './components/SignUp/SignUp';
Routes

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='admin' element={<Admin />} />
      </Routes>        
    </>
  )
}

export default App
