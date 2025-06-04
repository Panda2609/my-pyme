import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import ProductFilters from './ProductFilters';
import { FaEdit, FaTrash } from 'react-icons/fa';


const ProductList = () => {
  // Datos de ejemplo
  const allProducts = [
    { id: 1, name: 'Producto A', date: '2025-06-01', status: 'Activo' },
    { id: 2, name: 'Producto B', date: '2025-06-02', status: 'Inactivo' },
    { id: 3, name: 'Producto C', date: '2025-06-03', status: 'Activo' },
    { id: 4, name: 'Producto D', date: '2025-06-04', status: 'Inactivo' },
    { id: 5, name: 'Producto E', date: '2025-06-05', status: 'Activo' },
    { id: 6, name: 'Producto F', date: '2025-06-06', status: 'Activo' },
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
    <div>
      <h2>Listado de Productos</h2>

      <SearchBar value={search} onChange={setSearch} />

      <ProductFilters filters={filters} onChange={setFilters} />

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
              <td colSpan="4">No hay productos</td>
            </tr>
          ) : (
            paginated.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.date}</td>
                <td>{p.status}</td>
                <td>
                  <FaEdit
                    onClick={() => handleEdit(p.id)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                    title="Editar" // Tooltip al pasar el mouse
                  />
                  <FaTrash
                    onClick={() => handleDelete(p.id)}
                    style={{ cursor: 'pointer' }}
                    title="Eliminar" // Tooltip al pasar el mouse
                  />
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
