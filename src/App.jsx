import { Route, Routes } from 'react-router';

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from './components/Login';
import Register from './components/Register';
import AdminPanel from './components/AdimnPanel';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState({});
    
    const loginHandler = (user) =>{
        setUser(user);
    }

    const logoutHandler = () => {
        setUser({});
    }

    const userContextValue = {
        user, 
        onLogin:loginHandler, 
        isAuthenticated: !! user.username,
        onLogout:logoutHandler
    }

  return (
    <UserContext.Provider value={userContextValue} >
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/adminPanel' element={<AdminPanel/>}/>
    </Routes>
    <Footer/>    
    </UserContext.Provider>
  )
}

export default App
