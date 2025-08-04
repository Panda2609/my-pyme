import React from 'react';
import '../styles/ConfirmDeleteModal.css';

const ConfirmDeleteModal = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Confirmar eliminación</h3>
        <p>{message || '¿Estás seguro de que deseas eliminar este elemento?'}</p>
        <div className="modal-actions">
          <button className="btn-confirm" onClick={onConfirm}>Eliminar</button>
          <button className="btn-cancel" onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
