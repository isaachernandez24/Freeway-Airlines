import React from 'react';
import Navbar from './components/Navbar/navbar';
import Register from './components/Register/register';
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Register />
            {/* Otras secciones de tu página */}
        </div>
    );
};

export default App;
