import { Route, Routes } from 'react-router';

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdimnPanel';

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/adminPanel' element={<AdminPanel/>}/>
    </Routes>
    <Footer/>    
    </>
  )
}

export default App
