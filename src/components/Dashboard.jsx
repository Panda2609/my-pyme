import React, { useState } from 'react';
import '../styles/Dashboard.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

import { FaDollarSign, FaChartLine, FaBoxOpen, FaStar, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
// Modal simple reutilizable
const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        minWidth: 320,
        maxWidth: 400,
        padding: '2rem 1.5rem 1.5rem 1.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        position: 'relative'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute',
          top: 10,
          right: 16,
          background: 'none',
          border: 'none',
          fontSize: 22,
          cursor: 'pointer',
          color: '#888'
        }}>&times;</button>
        <h3 style={{marginTop:0, marginBottom: '1rem'}}>{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B8860B'];

const Dashboard = ({ dashboardData }) => {
    const {
        resumenInventario,
        ventasPorMes,
        rotacionProductos,
        stockPorCategoria,
        productosMasVendidos,
        alertasStockBajo,
        productosProximosAVencer
    } = dashboardData;

    const [modal, setModal] = useState(null);

    // Renderiza el contenido del modal según el KPI
    const renderModalContent = () => {
      if (modal === 'masVendidos') {
        return (
          <ol className="scrollable-list">
            {productosMasVendidos.map((prod, idx) => (
              <li key={idx} className="mas-vendidos">{prod.nombre} <span>({prod.vendidos} vendidos)</span></li>
            ))}
          </ol>
        );
      }
      if (modal === 'bajoStock') {
        return (
          <ul className="scrollable-list">
            {alertasStockBajo.map((prod, idx) => (
              <li key={idx} className="alerta-stock-bajo">{prod.nombre} <span>(Stock: {prod.stock})</span></li>
            ))}
          </ul>
        );
      }
      if (modal === 'proximosVencer') {
        return (
          <ul className="scrollable-list">
            {productosProximosAVencer.map((prod, idx) => (
              <li key={idx} className="proximos-vencer">{prod.nombre} <span>(Vence: {prod.vence})</span></li>
            ))}
          </ul>
        );
      }
      return null;
    };

    return (
      <>
        <Modal
          open={!!modal}
          onClose={() => setModal(null)}
          title={
            modal === 'masVendidos' ? 'Productos más vendidos' :
            modal === 'bajoStock' ? 'Productos con bajo stock' :
            modal === 'proximosVencer' ? 'Productos próximos a vencer' : ''
          }
        >
          {renderModalContent()}
        </Modal>
        <div className="dashboard-container">
          <div className='dashboard-header'>
            <h2>Dashboard</h2>
          </div>
          <div className="dashboard-graficos-kpi-layout">
            {/* KPIs a la izquierda */}
            <div className="dashboard-kpi-card">
              <div className="resumen-card">
                <h4>Ingresos del mes</h4>
                <FaDollarSign className="kpi-icon" />
                <div className="resumen-card-value">${resumenInventario.ingresosMes}</div>
              </div>
              <div className="resumen-card">
                <h4>Ganancia neta del mes</h4>
                <FaChartLine className="kpi-icon" />
                <div className="resumen-card-value">${resumenInventario.gananciaNeta}</div>
              </div>
              <div className="resumen-card">
                <button className='kpi-info-btn' onClick={() => setModal('masVendidos')}>
                  <FaExternalLinkAlt className="kpi-info-icon" />
                </button>
                <h4>Producto más vendido del mes</h4>
                <FaStar className="kpi-icon" />
                <div className="resumen-card-value">{resumenInventario.productoMasVendido}</div>
              </div>
              <div className="resumen-card">
                <button className='kpi-info-btn' onClick={() => setModal('bajoStock')}>
                  <FaExternalLinkAlt className="kpi-info-icon" />
                </button>
                <h4>Productos con bajo stock</h4>
                <FaBoxOpen className="kpi-icon" />
                <div className="resumen-card-value">{resumenInventario.productosBajoStock}</div>
              </div>
              <div className="resumen-card">
                <button className='kpi-info-btn' onClick={() => setModal('proximosVencer')}>
                  <FaExternalLinkAlt className="kpi-info-icon" />
                </button>
                <h4>Productos próximos a vencer</h4>
                <FaClock className="kpi-icon" />
                <div className="resumen-card-value">{resumenInventario.productosProximosAVencer}</div>
              </div>
            </div>
                    {/* Gráficos a la derecha */}
                    <div className="dashboard-graficos-grid">
                        <div className="grafico">
                            <div className="dashboard-section grafico">
                                <h3>Evolución de ventas</h3>
                                <ResponsiveContainer width="100%" height={220}>
                                    <LineChart data={ventasPorMes}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="mes" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="ventas" stroke="#1769aa" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="grafico">
                        <div className="dashboard-section grafico">
                            <h3>Rotación de productos</h3>
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart data={rotacionProductos}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="nombre" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="vendidos" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="grafico">
                        <div className="dashboard-section grafico">
                            <h3>Stock por categoría</h3>
                            <ResponsiveContainer width="100%" height={220}>
                                <PieChart>
                                    <Pie
                                        data={stockPorCategoria}
                                        dataKey="stock"
                                        nameKey="categoria"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        label
                                    >
                                        {stockPorCategoria.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="grafico">
                        <div className="dashboard-section grafico">
                            <h3>Productos próximos a vencer</h3>
                            <ResponsiveContainer width="100%" height={220}>
                                <BarChart data={productosProximosAVencer}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="nombre" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="vence" fill="#ffc658" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>                   
    );
};


export default Dashboard;

