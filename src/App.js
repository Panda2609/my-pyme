import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';


function App() {
  const [view, setView] = useState('dashboard');

  return (
    <div className="App">
      <Sidebar onMenuClick={setView} />
      <main className="main-content">
        {view === 'dashboard' && <Dashboard />}
        {view === 'inventario' && <ProductList />}
      </main>
    </div>
  );
}

export default App;
