import React from 'react';
import Navbar from './components/Navbar/navbar';
import Register from './components/Register/register';
import Reservaciones from './components/Reservaciones/reservaciones'
import './App.css';
import Check_In from './components/Check-in/check-in';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Register />
            <Reservaciones />
            <Check_In />
            {/* Otras secciones de tu página */}
        </div>
    );
};

export default App;
