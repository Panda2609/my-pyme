import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import ProductFilters from './ProductFilters';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../styles/ProductList.css'


const ProductList = () => {
  // Datos de ejemplo
  const allProducts = [
    { id: 1, name: 'Producto A', date: '2025-05-24', status: 'Activo' },
    { id: 2, name: 'Producto B', date: '2025-05-25', status: 'Inactivo' },
    { id: 3, name: 'Producto C', date: '2025-05-26', status: 'Activo' },
    { id: 4, name: 'Producto D', date: '2025-05-27', status: 'Activo' },
    { id: 5, name: 'Producto E', date: '2025-05-28', status: 'Inactivo' },
    { id: 6, name: 'Producto F', date: '2025-05-29', status: 'Activo' },
    { id: 7, name: 'Producto G', date: '2025-05-30', status: 'Activo' },
    { id: 8, name: 'Producto H', date: '2025-05-31', status: 'Inactivo' },
    { id: 9, name: 'Producto I', date: '2025-06-01', status: 'Activo' },
    { id: 10, name: 'Producto J', date: '2025-06-02', status: 'Inactivo' },
    { id: 11, name: 'Producto K', date: '2025-06-03', status: 'Activo' },
    { id: 12, name: 'Producto L', date: '2025-06-04', status: 'Activo' },
    { id: 13, name: 'Producto M', date: '2025-05-23', status: 'Inactivo' },
    { id: 14, name: 'Producto N', date: '2025-05-22', status: 'Activo' }
    // más productos...
  ];

  // Estados de filtros y búsqueda
  const [filters, setFilters] = useState({
  status: '',
  fromDate: '',
  toDate: '',
  // mas filtros...
  });

  // Estados de búsqueda y paginación
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Filtrar productos
  const filtered = allProducts
  .filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter((p) =>
    filters.status ? p.status === filters.status : true
  )
  .filter((p) =>
    filters.fromDate ? new Date(p.date) >= new Date(filters.fromDate) : true
  )
  .filter((p) =>
    filters.toDate ? new Date(p.date) <= new Date(filters.toDate) : true
  );

  // Funciones placeholder para las acciones
  const handleEdit = (productId) => {
    console.log('Editar producto:', productId);
    // Aquí iría la lógica para editar
  };

  const handleDelete = (productId) => {
    console.log('Eliminar producto:', productId);
    // Aquí iría la lógica para eliminar
  };

  // Paginación y calculo de total de páginas
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  

  return (
    // Aplicar clase CSS al contenedor principal
    <div className="product-list-container">
      <h2>Listado de Productos</h2>

      {/* Fila combinada para búsqueda y filtros */}
      <div className="filter-search-row">
        <SearchBar value={search} onChange={setSearch} />
        <ProductFilters filters={filters} onChange={setFilters} />
      </div>

      {/* Tabla de productos */}
      <table border="1" cellPadding="10" cellSpacing="0">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {paginated.length === 0 ? (
            <tr>
              {/* Aplicar clase al mensaje de no productos */}
              <td colSpan="5" className="no-products">No hay productos</td>
            </tr>
          ) : (
            paginated.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.date}</td>
                <td>{p.status}</td>
                <td>
                  {/* Contenedor para los iconos de acción */}
                  <div className="action-icons">
                    {/* Iconos con comportamiento de botón */}
                    <FaEdit
                      onClick={() => handleEdit(p.id)}
                      title="Editar" // Tooltip al pasar el mouse
                    />
                    <FaTrash
                      onClick={() => handleDelete(p.id)}
                      title="Eliminar" // Tooltip al pasar el mouse
                      className="delete-icon" // Clase específica para el icono de eliminar
                    />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>

      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
