import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; 
import logo from '../../assets/logo-avion.png'; // Asegúrate de que la ruta del logo sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Usa useNavigate en lugar de useHistory

// Interfaz para el estado del formulario
interface LoginData {
    username: string;
    password: string;
}

// Interfaz para los errores del formulario
interface LoginErrors {
    username?: string;
    password?: string;
}

const Login: React.FC = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState<LoginErrors>({});
    const [successMessage, setSuccessMessage] = useState<string | null>(null); // Estado para mensaje de éxito
    const navigate = useNavigate(); // Hook para redirección


    const validateField = (name: string, value: string) => {
        let error = '';
        switch (name) {
            case 'username':
                if (!value) error = 'Usuario es requerido';
                break;
            case 'password':
                if (!value) error = 'Contraseña es requerida';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setLoginData({ ...loginData, [id]: value });

        const error = validateField(id, value);
        setErrors({ ...errors, [id]: error });
    };

    const validate = () => {
        const newErrors: LoginErrors = {};
        Object.keys(loginData).forEach(key => {
            const error = validateField(key, loginData[key as keyof LoginData]);
            if (error) newErrors[key as keyof LoginErrors] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            setSuccessMessage('Inicio de Sesión exitoso. Redirigiendo a Itinerarios...');
            
            setTimeout(() => {
                navigate('#'); 
            }, 2000);
        } else {
            console.log('Formulario inválido');
        }
    };

    return (
        <div className="register-container">
            <div className="card register-card-login">
                <div className="card-body">
                    <div className="register-header">
                        <img src={logo} alt="Logo" className="register-logo" />
                        <h2 className="register-title">Iniciar Sesión</h2>
                    </div>
                    {successMessage && (
                        <div className="alert alert-success" role="alert">
                            {successMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                                <input
                                    type="text"
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                                    id="username"
                                    placeholder="Jhon123"
                                    value={loginData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                                </div>
                                <input
                                    type="password"
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    placeholder="Ingrese una Contraseña"
                                    value={loginData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
