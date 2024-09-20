// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/usuarios'; // Cambia esto a la URL de tu API

const Register = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [estado, setEstado] = useState('activo');  // Estado por defecto, puede ser "activo" o "inactivo"
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
    
        console.log({
            nombreUsuario,
            password,
            estado
        }); // Asegúrate de que los datos se vean bien aquí
    
        try {
            const response = await axios.post(API_URL, {
                nombreUsuario,
                password,
                estado
            });
    
            if (response.status === 200) {
                setSuccess('Registro exitoso, por favor inicia sesión.');
                setNombreUsuario('');
                setPassword('');
                setEstado('activo');
            }
        } catch (err) {
            if (err.response) {
                // Error que proviene del servidor (respuesta)
                console.error('Error en el registro:', err.response.data);
                console.error('Estado HTTP:', err.response.status);  // Código de estado HTTP (400, 500, etc.)
                setError(`Error en el registro: ${err.response.data.message || 'Verifica tus datos.'}`);
            } else if (err.request) {
                // No hubo respuesta del servidor
                console.error('No se recibió respuesta del servidor:', err.request);
                setError('Error en el registro. No se recibió respuesta del servidor.');
            } else {
                // Otro tipo de error (configuración, red, etc.)
                console.error('Error desconocido:', err.message);
                setError('Error en el registro. Verifica tu conexión.');
            }
        }
        
        
    };
    

    return (
        <form onSubmit={handleRegister} className="mb-4">
            <h2>Registro</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
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
            <div className="form-group">
                <label>Estado</label>
                <select
                    className="form-control"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                >
                    <option value="activo">Activo</option>
                    <option value="inactivo">Inactivo</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                Registrar
            </button>
        </form>
    );
};

export default Register;