import React from 'react';
import { FaTools } from 'react-icons/fa';
import '../styles/WorkInProgressModal.css';

const WorkInProgressModal = ({ open, onClose, message }) => {
  if (!open) return null;
  return (
    <div className="wip-modal-overlay">
      <div className="wip-modal-content">
        <FaTools className="wip-modal-icon" />
        <h2 className='wip-modal-title'>Funcionalidad en desarrollo</h2>
        <p className='wip-modal-message'>{message || 'Esta funcionalidad está siendo desarrollada. ¡Vuelve pronto!'}</p>
        <button className="wip-modal-btn" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default WorkInProgressModal;
