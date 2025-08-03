import WorkInProgressModal from './WorkInProgressModal';
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import "../styles/Shopping.css";
import mockShoppingData from "../data/mockShoppingData";
import SearchBar from "./SearchBar";
import ProductFilters from "./ProductFilters";
import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "../configs";
import { FaPlus, FaFileUpload, FaEdit, FaTrash } from 'react-icons/fa';

const Shopping = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ fromDate: "", toDate: "" });

  const [showWipModal, setShowWipModal] = useState(false);

  // Modal para productos
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProductos, setModalProductos] = useState([]);
  const [modalFactura, setModalFactura] = useState("");

  const handleOpenModal = (productos, factura) => {
    setModalProductos(productos);
    setModalFactura(factura);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);


  // Filtrado por proveedor, factura y fechas
  const filtered = mockShoppingData.filter((compra) => {
    const searchLower = search.toLowerCase();
    // Buscar en proveedor, factura y productos
    const matchProveedor = compra.proveedor.toLowerCase().includes(searchLower);
    const matchFactura = compra.factura.toLowerCase().includes(searchLower);
    const matchProducto = compra.productos.some(prod => prod.toLowerCase().includes(searchLower));
    const matchSearch = search === "" || matchProveedor || matchFactura || matchProducto;
    const matchFrom = filters.fromDate ? new Date(compra.fecha) >= new Date(filters.fromDate) : true;
    const matchTo = filters.toDate ? new Date(compra.fecha) <= new Date(filters.toDate) : true;
    //Compara el estado de la compra
    const matchStatus = filters.status ? compra.estado === filters.status : true;
    return matchSearch && matchFrom && matchTo && matchStatus;
  });

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="shopping-container">
        <div className='section-header'>
            <h2>Compras de productos</h2>
          </div>
        <div className="action-bar">
          <SearchBar value={search} onChange={setSearch} placeholder="Buscar por proveedor o factura..." />
          <ProductFilters 
          filters={filters} 
          onChange={setFilters}
          statusOptions={['Ingresado', 'Pendiente']}
          />
          
          <button
            className="btn"
            onClick={() => console.log('Botón Agregar Producto presionado')}
          >
            <FaPlus className="icon-btn" />
            Añadir Compra
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
        <div className="shopping-container">
          <table className="shopping-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Proveedor</th>
                <th>Factura</th>
                <th>Total</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan="6" className="no-products">No hay compras</td>
                </tr>
              ) : (
                paginated.map((compra) => (
                  <tr key={compra.id}>
                    <td>{compra.fecha}</td>
                    <td>{compra.proveedor}</td>
                    <td>{compra.factura}</td>
                    <td>{compra.total}</td>
                    <td>
                      <span className={`status-badge ${compra.estado.toLowerCase()}`}>
                      {compra.estado}
                    </span>
                    </td>
                    <td>
                      <div className="btn-action-container">
                        <button className="details-btn" title="Ver historial">
                          <FaEye />
                          Ver Detalle
                        </button> 
                        <button className="edit-btn" title="Editar">
                          <FaEdit />
                          Editar
                        </button>
                        <button className="delete-btn" title="Eliminar" >
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
          {/* Modal de productos */}
          {modalOpen && (
            <div className="modal-overlay" onClick={handleCloseModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h3>Productos de la compra (Factura: {modalFactura})</h3>
                <ul>
                  {modalProductos.map((prod, idx) => (
                    <li key={idx}>{prod}</li>
                  ))}
                </ul>
                <button className="close-modal-btn" onClick={handleCloseModal}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Shopping;