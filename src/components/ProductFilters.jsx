
import React from 'react';
import '../styles/ProductFilters.css';

/**
 * ProductFilters reutilizable
 * @param {Object} props
 * @param {Object} props.filters - Estado de los filtros
 * @param {Function} props.onChange - Callback para actualizar filtros
 * @param {boolean} [props.showStatus] - Mostrar filtro de estado
 * @param {boolean} [props.showDate] - Mostrar filtros de fecha
 * @param {Array} [props.statusOptions] - Opciones para el filtro de estado
 * @param {string} [props.statusLabel] - Etiqueta para el filtro de estado
 */
const ProductFilters = ({
  filters,
  onChange,
  showStatus = true,
  showDate = true,
  statusOptions = ['Activo', 'Inactivo'],
  statusLabel = 'Estado'
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...filters, [name]: value });
  };

  return (
    <>
      {showStatus && (
        <label className="product-filters-label">
          {statusLabel}:&nbsp;
          <select
            className="product-filters-select"
            name="status"
            value={filters.status}
            onChange={handleChange}
          >
            <option value="">Todos</option>
            {statusOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </label>
      )}
      {showDate && (
        <>
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
        </>
      )}
    </>
  );
};

export default ProductFilters;