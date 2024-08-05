import React from 'react';
import './home.css'; 

const Home: React.FC = () => {
    return (
        <div className="home">
            <section className="hero">
                <h1>Bienvenido a Freeway Airlines</h1>
                <p>Explora nuestras opciones de vuelo y reserva tu próximo viaje.</p>
            </section>
            <section className="offers">
                <h2>Ofertas Especiales</h2>
                <div className="offers-container">
                    <div className="offer">
                        <h3>Vuelos a Nivel Nacional</h3>
                        <p>¡Aprovecha nuestras ofertas exclusivas! Descuentos hasta el 50%.</p>
                    </div>
                    <div className="offer">
                        <h3>Escapada a la Playa</h3>
                        <p>Relájate con nuestras ofertas de escapadas a la playa. Paquetes todo incluido disponibles.</p>
                    </div>
                    <div className="offer">
                        <h3>Aventura en Canaima</h3>
                        <p>Descubre Canaina con nuestras ofertas especiales. Experiencias únicas te esperan.</p>
                    </div>
                </div>
            </section>
            <section className="specials">
                <h2>Planes Especiales para Niños</h2>
                <div className="specials-container">
                    <div className="special">
                        <h3>Aventura en la Nube</h3>
                        <p>Actividades y entretenimiento para los más pequeños durante el vuelo.</p>
                    </div>
                    <div className="special">
                        <h3>Comida Especial para Niños</h3>
                        <p>Menú diseñado para los niños con opciones saludables y deliciosas.</p>
                    </div>
                    <div className="special">
                        <h3>Descuento del 45%</h3>
                        <p>Niños con edad comprendida de dos años en adelante hasta los 12, aplica
                            un descuento de tarifa del 45% ocupando el asiento.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
