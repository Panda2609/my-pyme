import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import Client from './components/Client';
import mockDashboardData from './data/mockDashboardData';
import mockProducts from './data/mockProducts';
import mockprovidersData from './data/mockProvidersData';
import Providers from './components/Providers';
import Sales from './components/Sales';
import mockSalesData from './data/mockSalesData';



function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="App">
      <Sidebar onMenuClick={setView} />
      <main className="main-content">
        {view === 'dashboard' && <Dashboard dashboardData={mockDashboardData} />}
        {view === 'inventario' && <ProductList products={mockProducts} />}
        {view === 'clientes' &&  <Client />}
        {view === 'proveedores' && <Providers providers={mockprovidersData}/>}
        {view === 'ventas' && <Sales salesData={mockSalesData} />}
      </main>
    </div>
  );
}

export default App;
