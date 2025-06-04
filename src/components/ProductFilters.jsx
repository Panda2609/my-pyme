import React from 'react';

import '../styles/ProductFilters.css';

const ProductFilters = ({ filters, onChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <div className="product-filters-container">
      <label className="product-filters-label">
        Estado:&nbsp;
        <select
          className="product-filters-select"
          name="status"
          value={filters.status}
          onChange={handleChange}
        >
          <option value="">Todos</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </label>
      <label className="product-filters-label">
        Desde:&nbsp;
        <input
          className="product-filters-input"
          type="date"
          name="fromDate"
          value={filters.fromDate}
          onChange={handleChange}
        />
      </label>
      <label className="product-filters-label">
        Hasta:&nbsp;
        <input
          className="product-filters-input"
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
