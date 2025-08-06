import React, { useState } from "react";
import ListModal from './ListModal';
import EditItemModal from './EditItemModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import mockClientsData from "../data/mockClientsData";
import SearchBar from "./SearchBar";
import { ITEMS_PER_PAGE } from "../configs";  
import Pagination from "./Pagination";
import '../styles/Client.css';
import { FaPlus, FaFileUpload, FaEdit, FaTrash, FaHistory} from 'react-icons/fa';
import WorkInProgressModal from './WorkInProgressModal';

const Client = () => {
  // Estado local para los clientes
  const [clients, setClients] = useState(mockClientsData);
  const [showWipModal, setShowWipModal] = useState(false);
  // Modal para historial de compras
  const [historyModal, setHistoryModal] = useState({ open: false, items: [], title: '', message: '' });
  const [search, setSearch] = useState("");
  const [editModal, setEditModal] = useState({ open: false, client: null });
  const [addModal, setAddModal] = useState(false);
  const handleAdd = () => setAddModal(true);
  const handleSaveAdd = (newClient) => {
    setClients([...clients, { ...newClient, id: Date.now(), historial: [] }]);
    setAddModal(false);
  };
  const handleCancelAdd = () => setAddModal(false);
  const handleEdit = (clientId) => {
    const client = clients.find(c => c.id === clientId);
    setEditModal({ open: true, client });
  };
  const handleSaveEdit = (updatedClient) => {
    setClients(
      clients.map(c =>
        c.id === updatedClient.id ? { ...updatedClient } : c
      )
    );
    setEditModal({ open: false, client: null });
  };
  const handleCancelEdit = () => {
    setEditModal({ open: false, client: null });
  };
  const [deleteModal, setDeleteModal] = useState({ open: false, clientId: null });
  const handleDeleteClick = (clientId) => {
    setDeleteModal({ open: true, clientId });
  };
  const handleConfirmDelete = () => {
    setClients(clients.filter(c => c.id !== deleteModal.clientId));
    setDeleteModal({ open: false, clientId: null });
  };
  const handleCancelDelete = () => {
    setDeleteModal({ open: false, clientId: null });
  };
  const handleShowHistorial = (client) => {
    setHistoryModal({
      open: true,
      items: client.historial && client.historial.length > 0 ? client.historial : [],
      title: `Historial de compras de ${client.nombre}`,
      message: client.historial && client.historial.length === 0 ? 'No hay compras registradas.' : ''
    });
  };
  const handleCloseHistoryModal = () => {
    setHistoryModal({ open: false, items: [], title: '', message: '' });
  };

  // Filtrar clientes solo por búsqueda
  const filteredClients = clients.filter((c) =>
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
          onClick={handleAdd}
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
                      <button className="history-btn" title="Ver historial" onClick={() => handleShowHistorial(client)}>
                        <FaHistory />
                        Historial
                      </button>
                      <button className="edit-btn" title="Editar" onClick={() => handleEdit(client.id)}>
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

      {/* Modal para historial de compras */}
      <ListModal
        open={historyModal.open}
        onClose={handleCloseHistoryModal}
        title={historyModal.title}
        message={historyModal.message}
        items={historyModal.items}
      />
      <EditItemModal
        isOpen={addModal}
        item={{}}
        title="Añadir cliente"
        fields={[
          { name: 'nombre', label: 'Nombre', required: true },
          { name: 'contacto', label: 'Contacto', required: true },
        ]}
        onSave={handleSaveAdd}
        onCancel={handleCancelAdd}
      />
      <EditItemModal
        isOpen={editModal.open}
        item={editModal.client}
        title="Editar cliente"
        fields={[
          { name: 'nombre', label: 'Nombre', required: true },
          { name: 'contacto', label: 'Contacto', required: true },
        ]}
        onSave={handleSaveEdit}
        onCancel={handleCancelEdit}
      />
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