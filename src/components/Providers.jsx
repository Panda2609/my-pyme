
import React, { useState } from 'react';
import mockProvidersData from '../data/mockProvidersData';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import '../styles/Providers.css';
import { ITEMS_PER_PAGE } from "../configs";
import {FaPlus, FaFileUpload} from 'react-icons/fa';

const Providers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [search, setSearch] = useState("");

  const handleShowHistorial = (provider) => {
    setSelectedProvider(provider);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProvider(null);
  };

  const handleEdit = (providerId) => {
    // Lógica para editar proveedor
    alert('Editar proveedor: ' + providerId);
  };

  const handleDelete = (providerId) => {
    // Lógica para eliminar proveedor
    alert('Eliminar proveedor: ' + providerId);
  };

  // Filtrar proveedores por búsqueda
  const filteredProviders = mockProvidersData.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE;
  const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);
  const paginatedProviders = filteredProviders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="providers-container">
      <div className='section-header'>
          <h2>Proveedores</h2>
        </div>
      <div className="action-bar">
        <SearchBar value={search} onChange={setSearch} />
        <button
          className="btn"
          onClick={() => console.log('Botón Agregar Producto presionado')}
        >
          <FaPlus className="icon-btn" />
          Añadir Proveedor
        </button>
        <button
          className="btn"
          onClick={() => console.log('Botón Agregar Producto presionado')}
        >
          <FaFileUpload className="icon-btn" />
          Cargar Planilla
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Productos</th>
            <th>Fecha de contratación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProviders.length === 0 ? (
            <tr>
              <td colSpan="7" className="no-providers">No hay proveedores</td>
            </tr>
          ) : (
            paginatedProviders.map((provider) => (
              <tr key={provider.id}>
                <td>{provider.nombre}</td>
                <td>{provider.email}</td>
                <td>{provider.telefono}</td>
                <td>{provider.direccion}</td>
                <td>{provider.productos.join(', ')}</td>
                <td>{provider.fechaContratacion}</td>
                <td>
                  <button className="providers-action-btn" title="Ver historial" onClick={() => handleShowHistorial(provider)}>
                    <FaEye />
                  </button>
                  <button className="providers-action-btn" title="Editar">
                    <FaEdit />
                  </button>
                  <button className="providers-action-btn" title="Eliminar" >
                    <FaTrash />
                  </button>
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

      {/* Modal para historial */}
      {showModal && selectedProvider && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Historial de entregas de {selectedProvider.nombre}</h3>
            <ul>
              {selectedProvider.historial.length > 0 ? (
                selectedProvider.historial.map((item, idx) => (
                  <li key={idx}>
                    {item.producto} - {item.cantidad} unidades - {item.fecha}
                  </li>
                ))
              ) : (
                <li>No hay entregas registradas.</li>
              )}
            </ul>
            <button className="modal-close-btn" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Providers;