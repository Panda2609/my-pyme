import WorkInProgressModal from './WorkInProgressModal';
import EditItemModal from './EditItemModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import React, { useState } from 'react';
import mockProvidersData from '../data/mockProvidersData';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import ListModal from './ListModal';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import '../styles/Providers.css';
import { ITEMS_PER_PAGE } from "../configs";
import {FaPlus, FaFileUpload} from 'react-icons/fa';
import ProductFilters from './ProductFilters';

const Providers = () => {

  const [showWipModal, setShowWipModal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [search, setSearch] = useState("");
  const [editModal, setEditModal] = useState({ open: false, provider: null });
  // Estado para el modal de productos
  const [productsModal, setProductsModal] = useState({ open: false, items: [], title: '', message: '' });
  const [addModal, setAddModal] = useState(false);
  const handleAdd = () => setAddModal(true);
  const handleSaveAdd = (newProvider) => {
    // Aquí iría la lógica para agregar el proveedor
    setAddModal(false);
  };
  const handleCancelAdd = () => setAddModal(false);


  // Mostrar productos del proveedor en el modal
  const handleShowProducts = (provider) => {
    setProductsModal({
      open: true,
      items: provider.productos || [],
      title: `Productos que provee ${provider.nombre}`,
      message: provider.productos && provider.productos.length === 0 ? 'Este proveedor no tiene productos.' : ''
    });
  };

  const handleCloseProductsModal = () => {
    setProductsModal({ open: false, items: [], title: '', message: '' });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProvider(null);
  };

  const handleEdit = (providerId) => {
    const provider = mockProvidersData.find(p => p.id === providerId);
    setEditModal({ open: true, provider });
  };

  const handleSaveEdit = (updatedProvider) => {
    // Aquí iría la lógica para guardar el proveedor editado
    setEditModal({ open: false, provider: null });
  };

  const handleCancelEdit = () => {
    setEditModal({ open: false, provider: null });
  };

  const [deleteModal, setDeleteModal] = useState({ open: false, providerId: null });

  const handleDeleteClick = (providerId) => {
    setDeleteModal({ open: true, providerId });
  };

  const handleConfirmDelete = () => {
    // Aquí iría la lógica real para eliminar el proveedor
    setDeleteModal({ open: false, providerId: null });
  };

  const handleCancelDelete = () => {
    setDeleteModal({ open: false, providerId: null });
  };

  // Filtros por fecha
  const [filters, setFilters] = useState({ fromDate: '', toDate: '' });

  // Filtrar proveedores por búsqueda y fechas
  const filteredProviders = mockProvidersData.filter((p) => {
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase());
    const matchFrom = filters.fromDate ? new Date(p.fechaContratacion) >= new Date(filters.fromDate) : true;
    const matchTo = filters.toDate ? new Date(p.fechaContratacion) <= new Date(filters.toDate) : true;
    return matchSearch && matchFrom && matchTo;
  });

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
        <ProductFilters
          filters={filters}
          onChange={setFilters}
          showStatus={false}
          showDate={true}
        />
        <button
          className="btn"
          onClick={handleAdd}
        >
          <FaPlus className="icon-btn" />
          Añadir Proveedor
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
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            {/* <th>Productos</th> */}
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
                {/* <td>{provider.productos.join(', ')}</td> */}
                <td>{provider.fechaContratacion}</td>
                <td>
                  <div className="btn-action-container">
                    <button className="details-btn" title="Ver productos" onClick={() => handleShowProducts(provider)}>
                      <FaEye />
                      Ver productos
                    </button>
                    <button className="edit-btn" title="Editar" onClick={() => handleEdit(provider.id)}>
                      <FaEdit />
                      Editar
                    </button>
                    <button className="delete-btn" title="Eliminar" onClick={() => handleDeleteClick(provider.id)}>
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

      <ListModal
        open={productsModal.open}
        onClose={handleCloseProductsModal}
        title={productsModal.title}
        message={productsModal.message}
        items={productsModal.items}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <EditItemModal
        isOpen={addModal}
        item={{}}
        title="Añadir proveedor"
        fields={[
          { name: 'nombre', label: 'Nombre', required: true },
          { name: 'email', label: 'Email', required: true },
          { name: 'telefono', label: 'Teléfono', required: true },
          { name: 'direccion', label: 'Dirección', required: true },
          { name: 'fechaContratacion', label: 'Fecha de contratación', type: 'date', required: true },
        ]}
        onSave={handleSaveAdd}
        onCancel={handleCancelAdd}
      />
      <EditItemModal
        isOpen={editModal.open}
        item={editModal.provider}
        title="Editar proveedor"
        fields={[
          { name: 'nombre', label: 'Nombre', required: true },
          { name: 'email', label: 'Email', required: true },
          { name: 'telefono', label: 'Teléfono', required: true },
          { name: 'direccion', label: 'Dirección', required: true },
          { name: 'fechaContratacion', label: 'Fecha de contratación', type: 'date', required: true },
        ]}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        message="¿Estás seguro de que deseas eliminar este proveedor?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default Providers;
