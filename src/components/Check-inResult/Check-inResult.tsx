import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faShareAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import qrCodeImage from '../../assets/codigoQR.png'; // Asegúrate de que tienes una imagen QR de prueba
import './Check-inResult.css';

const QRResult: React.FC = () => {
    return (
        <div className="qr-result-container">
            <div className="qr-result-card">
                <div className="qr-result-header">
                    <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
                    <h2 className="qr-result-title">CÓDIGO QR</h2>
                </div>
                <div className="qr-result-content">
                    <img src={qrCodeImage} alt="Código QR" className="qr-code" />
                    <div className="qr-result-details">
                        <h3 className="qr-result-subtitle">RESULTADOS:</h3>
                        <p>Vuelo: 540</p>
                        <p>Destino: Maquetía</p>
                        <p>Aerolínea: Freeway Airline</p>
                    </div>
                    <div className="qr-result-actions">
                        <button className="btn btn-secondary">
                            <FontAwesomeIcon icon={faShareAlt} /> Compartir
                        </button>
                        <button className="btn btn-secondary">
                            <FontAwesomeIcon icon={faSave} /> Guardar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRResult;
