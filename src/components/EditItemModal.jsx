import React, { useState, useEffect } from 'react';
import '../styles/EditItemModal.css';

const EditItemModal = ({ isOpen, item, fields, onSave, onCancel, title }) => {
    const [form, setForm] = useState({});

    useEffect(() => {
        setForm(item || {});
    }, [item]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = { ...form };
        fields.forEach(field => {
            if (field.type === 'number' && result[field.name] !== undefined && result[field.name] !== '') {
            result[field.name] = Number(result[field.name]);
            }
        });
        onSave(result);
    };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title || 'Editar elemento'}</h3>
        <form onSubmit={handleSubmit} className="edit-form">
          {fields.map((field) => (
            <div className="form-group" key={field.name}>
              <label>{field.label}</label>
              <input
                type={field.type || 'text'}
                name={field.name}
                value={field.type === 'number'
                ? (form[field.name] !== undefined && form[field.name] !== null ? Number(form[field.name]) : '')
                : (form[field.name] !== undefined && form[field.name] !== null ? String(form[field.name]) : '')
                }
                onChange={handleChange}
                required={field.required}
                disabled={field.disabled}
              />
            </div>
          ))}
          <div className="modal-actions">
            <button type="submit" className="btn-confirm">Guardar</button>
            <button type="button" className="btn-cancel" onClick={onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItemModal;
