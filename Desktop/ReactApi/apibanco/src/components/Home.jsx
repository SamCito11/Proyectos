import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Card.css'

const Home = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div className="home-container">
            <div className="card">
                <div className="card-image">
                    <img id='img-left' src="https://cdn-icons-png.flaticon.com/512/4040/4040409.png" alt="Credit Card" />
                </div>
                <div className="card-content">
                    <h2>Regístrate</h2>
                    <p>Regístrate para acceder a tu banco</p>
                    <button className="learn-more-button" onClick={handleRegister}>Registro</button>
                </div>
            </div>
            <div className="card">
                <div className="card-image">
                    <img id='img-top' src="https://cdn-icons-png.flaticon.com/512/2294/2294290.png" alt="Insurance" />
                </div>
                <div className="card-content">
                    <h2>Ingresa</h2>
                    <p>Ingresa a tu banco</p>
                    <button className="learn-more-button" onClick={handleLogin}>Ingresa</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
