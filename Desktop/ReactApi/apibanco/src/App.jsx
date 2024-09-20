// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false); // Cambia el estado a no logueado
    };

    return (
        <Router>
            <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            <div className="container mt-5">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/usuarios" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/register" element={isLoggedIn ? <Navigate to="/usuarios" /> : <Register />} />
                    <Route path="/usuarios" element={isLoggedIn ? <UserList /> : <Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
