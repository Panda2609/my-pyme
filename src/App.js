import React, { useState } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import mockDashboardData from './data/mockDashboardData';
import mockProducts from './data/mockProducts';


function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="App">
      <Sidebar onMenuClick={setView} />
      <main className="main-content">
        {view === 'dashboard' && <Dashboard dashboardData={mockDashboardData} />}
        {view === 'inventario' && <ProductList products={mockProducts} />}
      </main>
    </div>
  );
}

export default App;
