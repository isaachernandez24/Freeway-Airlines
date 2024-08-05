import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Footer from './components/Footer/footer'; 
import './App.css';
import Itinerario from './components/Itinerarios/itinerarios';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <div className="background"></div> {/* Imagen de fondo */}
                <div id="root"> {/* Contenedor principal */}
                    <Navbar />
                    <div className="main-content"> {/* Contenedor del contenido principal */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/itinerario" element={<Itinerario />} />
                            {/* Puedes agregar más rutas aquí */}
                        </Routes>
                    </div>
                    <Footer /> {/* Footer en la parte inferior */}
                </div>
            </div>
        </Router>
    );
};

export default App;
