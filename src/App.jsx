import { Route, Routes } from 'react-router';

import Footer from "./components/Footer"
import Header from "./components/header"
import Home from "./components/Home"
import Login from './components/Login';
import Register from './components/Register';

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
    <Footer/>    
    </>
  )
}

export default App
