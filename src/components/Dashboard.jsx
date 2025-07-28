import React from 'react';
import '../styles/Dashboard.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';



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

    return (
        <div className="dashboard-container">
            <h2>Dashboard de Inventario</h2>
            {/* Fila 1: KPIs */}
            <div className="dashboard-resumen-row">
                <div className="resumen-card">
                    <h4>Costos</h4>
                    <div className="resumen-card-value">${resumenInventario.costos}</div>
                </div>
                <div className="resumen-card">
                    <h4>Ventas</h4>
                    <div className="resumen-card-value">{resumenInventario.ventas}</div>
                </div>
                <div className="resumen-card">
                    <h4>Ganancias</h4>
                    <div className="resumen-card-value">${resumenInventario.ganancias}</div>
                </div>
            </div>

            {/* Fila 2: Gráficos */}
            <div className="dashboard-graficos-row">
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

            {/* Fila 3: Listados */}
            <div className="dashboard-listados-row">
                <div className="dashboard-section mas-vendidos">
                    <h3>Productos más vendidos</h3>
                    <ol className="scrollable-list">
                        {productosMasVendidos.map((prod, idx) => (
                            <li key={idx}>{prod.nombre} <span>({prod.vendidos} vendidos)</span></li>
                        ))}
                    </ol>
                </div>
                <div className="dashboard-section alertas">
                    <h3>Alertas de stock bajo</h3>
                    {alertasStockBajo.length === 0 ? (
                        <p>Sin alertas de stock bajo.</p>
                    ) : (
                        <ul className="scrollable-list">
                            {alertasStockBajo.map((prod, idx) => (
                                <li key={idx} className="alerta-stock-bajo">{prod.nombre} <span>(Stock: {prod.stock})</span></li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="dashboard-section proximos-vencer">
                    <h3>Próximos a vencer</h3>
                    <ul className="scrollable-list">
                        {productosProximosAVencer.map((prod, idx) => (
                            <li key={idx}>{prod.nombre} <span>(Vence: {prod.vence})</span></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Dashboard;

