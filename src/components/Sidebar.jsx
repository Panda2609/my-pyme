import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onMenuClick }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>  
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#2D3748"/>
              <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Arial" fontWeight="bold">IP</text>
            </svg>
          </span>
          {!collapsed && <span className="logo-text">InventarioPyme</span>}
        </div>
        <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)} title="Expandir/Colapsar">
          <span>{collapsed ? '»' : '«'}</span>
        </button>
      </div>
      <nav className="sidebar-menu">

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('dashboard')}>
          <span className="menu-icon">
            <svg width="24" height="24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
          </span>
          {!collapsed && <span className="menu-text">Dashboard</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('inventario')}>
          <span className="menu-icon">
            <svg width="24" height="24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
          </span>
          {!collapsed && <span className="menu-text">Inventario de productos</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('clientes')}>
          <span className="menu-icon">
            {/* Icono de usuario */}
            <svg width="24" height="24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/>
              <path d="M6 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2"/>
            </svg>
          </span>
          {!collapsed && <span className="menu-text">Clientes</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('proveedores')}>
          <span className="menu-icon">
            {/* Icono de proveedores */}
            <svg width="24" height="24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="8" cy="8" r="4"/>
              <circle cx="16" cy="8" r="4"/>
              <path d="M2 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
              <path d="M18 20v-2a4 4 0 0 0-4-4"/>
            </svg>
          </span>
          {!collapsed && <span className="menu-text">Proveedores</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('ventas')}>
          <span className="menu-icon">
            {/* Icono de ventas */}
            <svg width="24" height="24" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </span>
          {!collapsed && <span className="menu-text">Ventas</span>}
        </button>

      </nav>
    </aside>
  );
};

export default Sidebar;

