import React from 'react';
import '../styles/ListModal.css';

const ListModal = ({ open, onClose, title, message, items = [] }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        {message && <p>{message}</p>}
        <ul className="list-modal-items">
          {items.length === 0 ? (
            <li>No hay elementos para mostrar.</li>
          ) : (
            items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))
          )}
        </ul>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default ListModal;
