import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { MdDashboard, MdInventory2, MdPeople, MdLocalShipping, MdPointOfSale, MdShoppingCart } from 'react-icons/md';

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
          {!collapsed && <span className="logo-text">MyPyme</span>}
        </div>
        <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)} title="Expandir/Colapsar">
          <span>{collapsed ? '»' : '«'}</span>
        </button>
      </div>
      <nav className="sidebar-menu">

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('dashboard')}>
          <span className="menu-icon">
            <MdDashboard size={24} color="#4A5568" />
          </span>
          {!collapsed && <span className="menu-text">Dashboard</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('inventario')}>
          <span className="menu-icon">
            <MdInventory2 size={24} color="#4A5568" />
          </span>
          {!collapsed && <span className="menu-text">Inventario de productos</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('clientes')}>
          <span className="menu-icon">
            <MdPeople size={24} color="#4A5568" />
          </span>
          {!collapsed && <span className="menu-text">Clientes</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('proveedores')}>
          <span className="menu-icon">
            <MdLocalShipping size={24} color="#4A5568" />
          </span>
          {!collapsed && <span className="menu-text">Proveedores</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('ventas')}>
          <span className="menu-icon">
            <MdPointOfSale size={24} color="#4A5568" />
          </span>
          {!collapsed && <span className="menu-text">Ventas</span>}
        </button>

        <button className="sidebar-menu-item" tabIndex={0} onClick={() => onMenuClick('compras')}>
          <span className="menu-icon">
            <MdShoppingCart size={24} color="#4A5568" />
          </span>
          {!collapsed && <span className="menu-text">Compras</span>}
        </button>

      </nav>
    </aside>
  );
};

export default Sidebar;

