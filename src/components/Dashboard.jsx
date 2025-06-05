import React from 'react';
import '../styles/Dashboard.css';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';


const Dashboard = () => {
    // Datos simulados para el dashboard
    const resumenInventario = {
        costos: 35000,
        ventas: 180,
        ganancias: 15000,
    };

    // Datos simulados para gráficos y listados
    const ventasPorMes = [
        { mes: 'Ene', ventas: 20 },
        { mes: 'Feb', ventas: 35 },
        { mes: 'Mar', ventas: 50 },
        { mes: 'Abr', ventas: 40 },
        { mes: 'May', ventas: 60 },
        { mes: 'Jun', ventas: 75 }
    ];

    const rotacionProductos = [
        { nombre: 'Laptop HP', vendidos: 34 },
        { nombre: 'Mouse Logitech', vendidos: 28 },
        { nombre: 'Monitor Samsung', vendidos: 22 },
        { nombre: 'Tablet Lenovo', vendidos: 17 },
        { nombre: 'Auriculares Sony', vendidos: 15 }
    ];

    const stockPorCategoria = [
        { categoria: 'Laptops', stock: 40 },
        { categoria: 'Accesorios', stock: 30 },
        { categoria: 'Impresoras', stock: 15 },
        { categoria: 'Tablets', stock: 10 },
        { categoria: 'Otros', stock: 5 }
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B8860B'];

    const productosMasVendidos = [
        { nombre: 'Laptop HP', vendidos: 34 },
        { nombre: 'Mouse Logitech', vendidos: 28 },
        { nombre: 'Monitor Samsung', vendidos: 22 },
        { nombre: 'Impresora Epson', vendidos: 19 },
        { nombre: 'Tablet Lenovo', vendidos: 17 },
        { nombre: 'Auriculares Sony', vendidos: 15 },
        { nombre: 'Webcam Logitech', vendidos: 13 }
    ];

    const alertasStockBajo = [
        { nombre: 'Teclado Genius', stock: 2 },
        { nombre: 'Cargador Lenovo', stock: 1 },
        { nombre: 'Mouse HP', stock: 3 },
        { nombre: 'Monitor LG', stock: 2 },
        { nombre: 'USB Kingston', stock: 1 },
        { nombre: 'Router TP-Link', stock: 2 },
        { nombre: 'Batería Dell', stock: 1 }
    ];

    const productosProximosAVencer = [
        { nombre: 'Tóner HP', vence: '2025-07-01' },
        { nombre: 'Batería APC', vence: '2025-06-20' },
        { nombre: 'Cartucho Epson', vence: '2025-06-15' },
        { nombre: 'Pilas Duracell', vence: '2025-06-10' },
        { nombre: 'Disco SSD Kingston', vence: '2025-06-08' }
    ];

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

