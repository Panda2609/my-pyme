import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import ProductFilters from './ProductFilters';
import { FaEdit, FaTrash, FaPlus, FaFileUpload} from 'react-icons/fa';
import '../styles/ProductList.css'
import { ITEMS_PER_PAGE } from "../configs";  

import WorkInProgressModal from './WorkInProgressModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';


const ProductList = ({ products }) => {
  // Usar los productos recibidos por props
  const allProducts = products;

  // Estados de filtros y búsqueda
  const [filters, setFilters] = useState({
  status: '',
  fromDate: '',
  toDate: '',
  // mas filtros...
  });

  const [showWipModal, setShowWipModal] = useState(false);

  // Estados de búsqueda y paginación
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE;

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


  // Estado para el modal de confirmación de borrado
  const [deleteModal, setDeleteModal] = useState({ open: false, productId: null });

  const handleEdit = (productId) => {
    console.log('Editar producto:', productId);
    // Aquí iría la lógica para editar
  };

  const handleDeleteClick = (productId) => {
    setDeleteModal({ open: true, productId });
  };

  const handleConfirmDelete = () => {
    console.log('Eliminar producto:', deleteModal.productId);
    // Aquí iría la lógica real para eliminar el producto
    setDeleteModal({ open: false, productId: null });
  };

  const handleCancelDelete = () => {
    setDeleteModal({ open: false, productId: null });
  };

  // Paginación y calculo de total de páginas
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  

  return (
    // Aplicar clase CSS al contenedor principal
    <>
      <div className="product-list-container">
        <div className='section-header'>
          <h2>Lista de Productos</h2>
        </div>
        
        {/* Fila combinada para búsqueda, filtros y botón */}
        <div className="action-bar">
          <SearchBar value={search} onChange={setSearch} />
          <ProductFilters 
          filters={filters} 
          onChange={setFilters}
          statusOptions={['Disponible', 'Agotado', 'Venciendo']}
          />
          <button
            className="btn"
            onClick={() => console.log('Botón Agregar Producto presionado')}
          >
            <FaPlus className="icon-btn" />
            Añadir Producto
          </button>
          <button
            className="btn"
            onClick={() => setShowWipModal(true)}
          >
            <FaFileUpload className="icon-btn" />
            Cargar Planilla
          </button>
      <WorkInProgressModal
        open={showWipModal}
        onClose={() => setShowWipModal(false)}
        message="La carga de planillas estará disponible próximamente."
      />
        </div>

        {/* Tabla de productos */}
        <table>

          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Nombre</th>
              <th>Código</th>
              <th>Stock actual</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Proovedor</th>
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
                  <td>{p.name}</td>
                  <td>{p.codigo}</td>
                  <td>{p.cantidad}</td>
                  <td>{p.categoria}</td>
                  <td>{p.precio}</td>
                  <td>{p.proveedor}</td>
                  <td>{p.date}</td>
                  <td>
                    <span className={`status-badge ${p.status.toLowerCase()}`}>
                      {p.status}
                    </span>
                  </td>
                  <td>
                    <div className="btn-action-container">
                      {/* <button className="history-btn" title="Ver historial">
                        <FaEye />
                      </button> */}
                      <button className="edit-btn" title="Editar" onClick={() => handleEdit(p.id)}>
                        <FaEdit />
                        Editar
                      </button>
                      <button className="delete-btn" title="Eliminar" onClick={() => handleDeleteClick(p.id)}>
                        <FaTrash />
                        Eliminar
                      </button>
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
      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        message="¿Estás seguro de que deseas eliminar este producto?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
};

export default ProductList;
