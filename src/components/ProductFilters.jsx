import React from 'react';

const ProductFilters = ({ filters, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        Estado:&nbsp;
        <select name="status" value={filters.status} onChange={handleChange}>
          <option value="">Todos</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Desde:&nbsp;
        <input
          type="date"
          name="fromDate"
          value={filters.fromDate}
          onChange={handleChange}
        />
      </label>
      &nbsp;&nbsp;
      <label>
        Hasta:&nbsp;
        <input
          type="date"
          name="toDate"
          value={filters.toDate}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default ProductFilters;
