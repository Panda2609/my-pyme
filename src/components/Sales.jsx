import WorkInProgressModal from './WorkInProgressModal';
import EditItemModal from './EditItemModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import ListModal from './ListModal';
import mockSalesData from '../data/mockSalesData';
import SearchBar from './SearchBar';
import ProductFilters from './ProductFilters';
import Pagination from './Pagination';
import '../styles/Sales.css';
import { ITEMS_PER_PAGE } from "../configs";
import { FaPlus, FaFileUpload, FaEdit, FaTrash} from 'react-icons/fa';

const Sales = () => {
  // Estado local para las ventas
  const [sales, setSales] = useState(mockSalesData);
  const [search, setSearch] = useState("");
  const [editModal, setEditModal] = useState({ open: false, sale: null });
  const [addModal, setAddModal] = useState(false);
  const handleAdd = () => setAddModal(true);
  const handleSaveAdd = (newSale) => {
    // Aquí iría la lógica para agregar la venta
    setAddModal(false);
  };
  const handleCancelAdd = () => setAddModal(false);
  const handleEdit = (saleId) => {
    const sale = sales.find(s => s.id === saleId);
    setEditModal({ open: true, sale });
  };

  const handleSaveEdit = (updatedSale) => {
    setSales(
      sales.map(s =>
        s.id === updatedSale.id ? { ...updatedSale } : s
      )
    );
    setEditModal({ open: false, sale: null });
  };

  const handleCancelEdit = () => {
    setEditModal({ open: false, sale: null });
  };
  const [filters, setFilters] = useState({ status: '', fromDate: '', toDate: '' });

  const [showWipModal, setShowWipModal] = useState(false);


  // Filtrar ventas por nombre de cliente y rango de fecha
  const filteredSales = sales
    .filter((v) => v.cliente.toLowerCase().includes(search.toLowerCase()))
    .filter((v) =>
      filters.fromDate ? new Date(v.fecha) >= new Date(filters.fromDate) : true
    )
    .filter((v) =>
      filters.toDate ? new Date(v.fecha) <= new Date(filters.toDate) : true
    );

  const [deleteModal, setDeleteModal] = useState({ open: false, saleId: null });
  // Modal para productos
  const handleDeleteClick = (saleId) => {
    setDeleteModal({ open: true, saleId });
  };

  const handleConfirmDelete = () => {
    setSales(sales.filter(s => s.id !== deleteModal.saleId));
    setDeleteModal({ open: false, saleId: null });
  };

  const handleCancelDelete = () => {
    setDeleteModal({ open: false, saleId: null });
  };
  // Modal para productos vendidos
  const [productsModal, setProductsModal] = useState({ open: false, items: [], title: '', message: '' });

  const handleShowProductos = (venta) => {
    setProductsModal({
      open: true,
      items: venta.productos.map(prod => `${prod.nombre} x${prod.cantidad} ($${prod.precio.toLocaleString('es-CL')})`),
      title: `Productos vendidos a ${venta.cliente}`,
      message: venta.productos.length === 0 ? 'No hay productos en esta venta.' : ''
    });
  };

  const handleCloseProductosModal = () => {
    setProductsModal({ open: false, items: [], title: '', message: '' });
  };
  

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE;
  const totalPages = Math.ceil(filteredSales.length / itemsPerPage);
  const paginatedSales = filteredSales.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="sales-container">
        <div className='section-header'>
            <h2>Ventas</h2>
          </div>
        <div className="action-bar">
          <SearchBar value={search} onChange={setSearch} />
          <ProductFilters filters={filters} onChange={setFilters} showStatus={false} showDate={true} />
          <button
            className="btn"
            onClick={handleAdd}
          >
            <FaPlus className="icon-btn" />
            Añadir Venta
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
        <table className="sales-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paginatedSales.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-sales">No hay ventas</td>
              </tr>
            ) : (
              paginatedSales.map((venta) => (
                <tr key={venta.id}>
                  <td>{venta.cliente}</td>
                  <td>{venta.fecha}</td>
                  <td>${venta.total.toLocaleString('es-CL')}</td>
                  <td>
                    <div className="btn-action-container">
                      <button className="details-btn" title="Ver detalle" onClick={() => handleShowProductos(venta)}>
                        <FaEye/>
                        Ver Detalle
                      </button>
                      <button className="edit-btn" title="Editar" onClick={() => handleEdit(venta.id)}>
                        <FaEdit />
                        Editar
                      </button>
                      <button className="delete-btn" title="Eliminar" onClick={() => handleDeleteClick(venta.id)}>
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

        <EditItemModal
          isOpen={addModal}
          item={{}}
          title="Añadir venta"
          fields={[
            { name: 'cliente', label: 'Cliente', required: true },
            { name: 'fecha', label: 'Fecha', type: 'date', required: true },
            { name: 'total', label: 'Total', type: 'number', required: true },
          ]}
          onSave={handleSaveAdd}
          onCancel={handleCancelAdd}
        />
        <EditItemModal
          isOpen={editModal.open}
          item={editModal.sale}
          title="Editar venta"
          fields={[
            { name: 'cliente', label: 'Cliente', required: true },
            { name: 'fecha', label: 'Fecha', type: 'date', required: true },
            { name: 'total', label: 'Total', type: 'number', required: true },
          ]}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
        <ConfirmDeleteModal
          isOpen={deleteModal.open}
          message="¿Estás seguro de que deseas eliminar esta venta?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </div>
      {/* Modal para productos vendidos fuera del contenedor principal */}
      <ListModal
        open={productsModal.open}
        onClose={handleCloseProductosModal}
        title={productsModal.title}
        message={productsModal.message}
        items={productsModal.items}
      />
    </>
  );
};

export default Sales;