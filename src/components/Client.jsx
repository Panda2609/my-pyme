import React, { useState } from "react";
import ConfirmDeleteModal from './ConfirmDeleteModal';
import mockClientsData from "../data/mockClientsData";
import SearchBar from "./SearchBar";
import { ITEMS_PER_PAGE } from "../configs";  
import Pagination from "./Pagination";
import '../styles/Client.css';
import { FaPlus, FaFileUpload, FaEdit, FaTrash, FaHistory} from 'react-icons/fa';
import WorkInProgressModal from './WorkInProgressModal';

const Client = () => {
  
  const [showWipModal, setShowWipModal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState({ open: false, clientId: null });
  const handleDeleteClick = (clientId) => {
    setDeleteModal({ open: true, clientId });
  };

  const handleConfirmDelete = () => {
    // Aquí iría la lógica real para eliminar el cliente
    setDeleteModal({ open: false, clientId: null });
  };

  const handleCancelDelete = () => {
    setDeleteModal({ open: false, clientId: null });
  };


  const handleShowHistorial = (client) => {
    setSelectedClient(client);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedClient(null);
  };

  // Filtrar clientes solo por búsqueda
  const filteredClients = mockClientsData.filter((c) =>
    c.nombre.toLowerCase().includes(search.toLowerCase())
  );

  // Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE;
  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="client-container">
      <div className="section-header">
        <h2>Clientes</h2>
      </div>
      <div className="action-bar">
        <SearchBar value={search} onChange={setSearch} />
        <button
          className="btn"
          onClick={() => console.log('Botón Agregar Producto presionado')}
        >
          <FaPlus className="icon-btn" />
          Añadir Cliente
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
      <table className="client-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Contacto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedClients.length === 0 ? (
            <tr>
              <td colSpan="3" className="no-clients">No hay clientes</td>
            </tr>
          ) : (
            paginatedClients.map((client) => (
              <tr key={client.id}>
                <td>{client.nombre}</td>
                <td>{client.contacto}</td>
                <td>
                  <div className="action-icons">
                    <div className="btn-action-container">
                      <button className="history-btn" title="Ver historial">
                        <FaHistory />
                        Historial
                      </button>
                      <button className="edit-btn" title="Editar">
                        <FaEdit />
                        Editar
                      </button>
                      <button className="delete-btn" title="Eliminar" onClick={() => handleDeleteClick(client.id)}>
                        <FaTrash />
                        Eliminar
                      </button>
                    </div>
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

      {/* Modal */}
      {showModal && selectedClient && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Historial de compras de {selectedClient.nombre}</h3>
            <ul>
              {selectedClient.historial.length > 0 ? (
                selectedClient.historial.map((item, idx) => <li key={idx}>{item}</li>)
              ) : (
                <li>No hay compras registradas.</li>
              )}
            </ul>
            <button className="modal-close-btn" onClick={handleCloseModal}>Cerrar</button>
          </div>
        </div>
      )}
      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        message="¿Estás seguro de que deseas eliminar este cliente?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default Client;