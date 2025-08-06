import WorkInProgressModal from './WorkInProgressModal';
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import ListModal from './ListModal';
import "../styles/Shopping.css";
import mockShoppingData from "../data/mockShoppingData";
import SearchBar from "./SearchBar";
import ProductFilters from "./ProductFilters";
import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "../configs";
import { FaPlus, FaFileUpload, FaEdit, FaTrash } from 'react-icons/fa';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import EditItemModal from './EditItemModal';

const Shopping = () => {
  // Estado local para las compras
  const [shoppings, setShoppings] = useState(mockShoppingData);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ fromDate: "", toDate: "" });

  const [showWipModal, setShowWipModal] = useState(false);

  // Modal para productos de la compra
  const [productsModal, setProductsModal] = useState({ open: false, items: [], title: '', message: '' });
  const [deleteModal, setDeleteModal] = useState({ open: false, shoppingId: null });
  const [editModal, setEditModal] = useState({ open: false, shopping: null });
  const [addModal, setAddModal] = useState(false);
  const handleAdd = () => setAddModal(true);
  const handleSaveAdd = (newShopping) => {
    // Aquí iría la lógica para agregar la compra
    setAddModal(false);
  };
  const handleCancelAdd = () => setAddModal(false);
  const handleEdit = (shoppingId) => {
    const shopping = shoppings.find(s => s.id === shoppingId);
    setEditModal({ open: true, shopping });
  };

  const handleSaveEdit = (updatedShopping) => {
    setShoppings(
      shoppings.map(s =>
        s.id === updatedShopping.id ? { ...updatedShopping } : s
      )
    );
    setEditModal({ open: false, shopping: null });
  };

  const handleCancelEdit = () => {
    setEditModal({ open: false, shopping: null });
  };


  const handleShowProductos = (compra) => {
    setProductsModal({
      open: true,
      items: compra.productos,
      title: `Productos de la compra (Factura: ${compra.factura})`,
      message: compra.productos.length === 0 ? 'No hay productos en esta compra.' : ''
    });
  };

  const handleCloseProductosModal = () => {
    setProductsModal({ open: false, items: [], title: '', message: '' });
  };


  // Filtrado por proveedor, factura y fechas
  const filtered = shoppings.filter((compra) => {
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
            onClick={handleAdd}
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
                <th>Proveedor</th>
                <th>Factura</th>
                <th>Fecha</th>
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
                    <td>{compra.proveedor}</td>
                    <td>{compra.factura}</td>
                    <td>{compra.fecha}</td>
                    <td>{compra.total}</td>
                    <td>
                      <span className={`status-badge ${compra.estado.toLowerCase()}`}>
                      {compra.estado}
                    </span>
                    </td>
                    <td>
                      <div className="btn-action-container">
                        <button className="details-btn" title="Ver detalle" onClick={() => handleShowProductos(compra)}>
                          <FaEye />
                          Ver Detalle
                        </button>
                        <button className="edit-btn" title="Editar" onClick={() => handleEdit(compra.id)}>
                          <FaEdit />
                          Editar
                        </button>
                        <button className="delete-btn" title="Eliminar" onClick={() => handleDeleteClick(compra.id)}>
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
          {/* Modal para productos de la compra */}
          <ListModal
            open={productsModal.open}
            onClose={handleCloseProductosModal}
            title={productsModal.title}
            message={productsModal.message}
            items={productsModal.items}
          />
        </div>
      </div>
      {/* Modal de edición vacío para añadir productos */}
      <EditItemModal
        isOpen={addModal}
        item={{}}
        title="Añadir compra"
        fields={[
          { name: 'proveedor', label: 'Proveedor', required: true },
          { name: 'factura', label: 'Factura', required: true },
          { name: 'fecha', label: 'Fecha', type: 'date', required: true },
          { name: 'total', label: 'Total', type: 'number', required: true },
          { name: 'estado', label: 'Estado', required: true },
        ]}
        onSave={handleSaveAdd}
        onCancel={handleCancelAdd}
      />
      {/* Modal de edición para editar productos */}
      <EditItemModal
        isOpen={editModal.open}
        item={editModal.shopping}
        title="Editar compra"
        fields={[
          { name: 'proveedor', label: 'Proveedor', required: true },
          { name: 'factura', label: 'Factura', required: true },
          { name: 'fecha', label: 'Fecha', type: 'date', required: true },
          { name: 'total', label: 'Total', type: 'number', required: true },
          { name: 'estado', label: 'Estado', required: true },
        ]}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        message="¿Estás seguro de que deseas eliminar esta compra?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
  // Funciones para el modal de confirmación
  function handleDeleteClick(id) {
    setDeleteModal({ open: true, shoppingId: id });
  }

  function handleConfirmDelete() {
    setShoppings(shoppings.filter(s => s.id !== deleteModal.shoppingId));
    setDeleteModal({ open: false, shoppingId: null });
  }

  function handleCancelDelete() {
    setDeleteModal({ open: false, shoppingId: null });
  }
};

export default Shopping;