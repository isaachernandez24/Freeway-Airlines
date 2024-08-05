import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Register from './components/Register/register';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Footer from './components/Footer/footer'; 
import './App.css';
import Itinerarios from './components/Itinerarios/itinerarios';
import Check_In from './components/Check-in/check-in';
 import Reservaciones from './components/Reservaciones/reservaciones'

const App: React.FC = () => {
    return (
         <Router>
            <div>
                <div className="background"></div>
                <div id="root">
                    <Navbar />
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/itinerarios" element={<Itinerarios />} />
                            <Route path="/reservaciones" element={<Reservaciones />} />
                            <Route path="/check-in" element={<Check_In />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    );
};

export default App;
