

import React, { useState } from "react";
import mockClientsData from "../data/mockClientsData";
import SearchBar from "./SearchBar";
import { ITEMS_PER_PAGE } from "../configs";  
import Pagination from "./Pagination";
import '../styles/Client.css';

const Client = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [search, setSearch] = useState("");


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
      <div className="filter-search-row">
        <SearchBar value={search} onChange={setSearch} />
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
                  <button className="client-historial-btn" onClick={() => handleShowHistorial(client)}>
                    Ver historial
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
    </div>
  );
};

export default Client;