import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'; // Importa el archivo CSS para estilos personalizados
import logo from '../../assets/logo-avion.png'; // Asegúrate de que la ruta del logo sea correcta

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
            <a className="navbar-brand" href="#home">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <span className="navbar-title">Freeway Airlines</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#reservations">Reservaciones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Itinerarios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-contact" href="#contact">Inicio de Sesión</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
