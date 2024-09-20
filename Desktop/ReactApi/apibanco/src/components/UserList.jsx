import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/usuarios'; // Cambia esto a la URL de tu API

const UserList = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [estado, setEstado] = useState('activo');

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        const response = await axios.get(API_URL);
        setUsuarios(response.data);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/${editingId}`, { nombreUsuario, password, estado });
            setEditingId(null);
            setNombreUsuario('');
            setPassword('');
            setEstado('activo');
            fetchUsuarios();
        } catch (err) {
            console.error('Error al actualizar el usuario:', err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            if (id === editingId) {
                setEditingId(null);
                setNombreUsuario('');
                setPassword('');
                setEstado('activo');
            }
            fetchUsuarios();
        } catch (err) {
            console.error('Error al eliminar el usuario:', err);
        }
    };

    return (
        <div className="user-list-container">
            <h1 className="user-list-title">Gestión de Usuarios</h1>
            <div className="user-list-card">
                <ul className="user-list-items">
                    {usuarios.map(usuario => (
                        <li key={usuario._id} className="user-item">
                            <div className="user-details">
                                <h5 className="username">{usuario.nombreUsuario}</h5>
                                <small className="user-status">Estado: {usuario.estado}</small>
                            </div>
                            <div className="user-actions">
                                <button
                                    className="action-button edit-button"
                                    onClick={() => {
                                        setEditingId(usuario._id);
                                        setNombreUsuario(usuario.nombreUsuario);
                                        setEstado(usuario.estado);
                                        setPassword('');
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    className="action-button delete-button"
                                    onClick={() => handleDelete(usuario._id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {editingId && (
                <div className="user-edit-card">
                    <form onSubmit={handleUpdate} className="edit-form">
                        <h2 className="edit-form-title">Editar Usuario</h2>
                        <div className="form-field">
                            <label className="form-label">Nombre de Usuario</label>
                            <input
                                type="text"
                                className="form-input"
                                value={nombreUsuario}
                                onChange={(e) => setNombreUsuario(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-field">
                            <label className="form-label">Estado</label>
                            <select
                                className="form-select"
                                value={estado}
                                onChange={(e) => setEstado(e.target.value)}
                                required
                            >
                                <option value="activo">Activo</option>
                                <option value="inactivo">Inactivo</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <button type="submit" className="action-button update-button">
                                Actualizar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default UserList;
