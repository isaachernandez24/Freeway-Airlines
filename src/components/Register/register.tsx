import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'; // Importa el archivo CSS para estilos personalizados
import logo from '../../assets/logo-avion.png'; // Asegúrate de que la ruta del logo sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faKey, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Register: React.FC = () => {
    return (
        <div className="register-container">
            <div className="card register-card">
                <div className="card-body">
                    <div className="register-header">
                        <img src={logo} alt="Logo" className="register-logo" />
                        <h2 className="register-title">Registrarse</h2>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="firstName">Nombre</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <input type="text" className="form-control" id="firstName" placeholder="Jhon" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Edad</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                                        </div>
                                        <input type="number" className="form-control" id="age" placeholder="20" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faEnvelope} /></span>
                                        </div>
                                        <input type="email" className="form-control" id="email" placeholder="Jhon@gmail.com" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="username">Usuario</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <input type="text" className="form-control" id="username" placeholder="Jhon123" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="lastName">Apellido</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                        </div>
                                        <input type="text" className="form-control" id="lastName" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faPhone} /></span>
                                        </div>
                                        <input type="tel" className="form-control" id="phone" placeholder="41234567" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                                        </div>
                                        <input type="password" className="form-control" id="password" placeholder="Ingrese una Contraseña" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
