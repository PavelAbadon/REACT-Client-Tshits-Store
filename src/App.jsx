import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import UserContext from './contexts/UserContext.jsx';
import AdminPanel from './components/AdminPanel.jsx';

function App() {
  const { isAuthenticated, isAdmin } = useContext(UserContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/adminPanel"
          element={
            isAuthenticated && isAdmin ? (
              <AdminPanel />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;