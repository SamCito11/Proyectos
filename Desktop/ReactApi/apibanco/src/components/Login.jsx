// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Importa el archivo App.css

const API_URL = 'http://localhost:3000/usuarios'; // Cambia esto a la URL de tu API

const Login = ({ setIsLoggedIn, setIsRegister }) => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/login`, { nombreUsuario, password });
            setIsLoggedIn(true); // Cambia el estado a logueado
            setNombreUsuario('');
            setPassword('');
        } catch (error) {
            alert('Credenciales inválidas');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>
            <div className="form-group">
                <label>Nombre de Usuario</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombreUsuario}
                    onChange={(e) => setNombreUsuario(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-success">
                Iniciar Sesión
            </button>
        </form>
    );
};

export default Login;
