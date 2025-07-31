// Datos simulados para el dashboard
const mockDashboardData = {
  resumenInventario: {
    ingresosMes: 35000, // pesos
    gananciaNeta: 15000, // pesos
    productoMasVendido: 'Laptop HP',
    productosBajoStock: 7, // cantidad
    productosProximosAVencer: 5 // cantidad
  },
  ventasPorMes: [
    { mes: 'Ene', ventas: 20 },
    { mes: 'Feb', ventas: 35 },
    { mes: 'Mar', ventas: 50 },
    { mes: 'Abr', ventas: 40 },
    { mes: 'May', ventas: 60 },
    { mes: 'Jun', ventas: 75 }
  ],
  rotacionProductos: [
    { nombre: 'Laptop HP', vendidos: 34 },
    { nombre: 'Mouse Logitech', vendidos: 28 },
    { nombre: 'Monitor Samsung', vendidos: 22 },
    { nombre: 'Tablet Lenovo', vendidos: 17 },
    { nombre: 'Auriculares Sony', vendidos: 15 }
  ],
  stockPorCategoria: [
    { categoria: 'Laptops', stock: 40 },
    { categoria: 'Accesorios', stock: 30 },
    { categoria: 'Impresoras', stock: 15 },
    { categoria: 'Tablets', stock: 10 },
    { categoria: 'Otros', stock: 5 }
  ],
  productosMasVendidos: [
    { nombre: 'Laptop HP', vendidos: 34 },
    { nombre: 'Mouse Logitech', vendidos: 28 },
    { nombre: 'Monitor Samsung', vendidos: 22 },
    { nombre: 'Impresora Epson', vendidos: 19 },
    { nombre: 'Tablet Lenovo', vendidos: 17 },
    { nombre: 'Auriculares Sony', vendidos: 15 },
    { nombre: 'Webcam Logitech', vendidos: 13 }
  ],
  alertasStockBajo: [
    { nombre: 'Teclado Genius', stock: 2 },
    { nombre: 'Cargador Lenovo', stock: 1 },
    { nombre: 'Mouse HP', stock: 3 },
    { nombre: 'Monitor LG', stock: 2 },
    { nombre: 'USB Kingston', stock: 1 },
    { nombre: 'Router TP-Link', stock: 2 },
    { nombre: 'Batería Dell', stock: 1 }
  ],
  productosProximosAVencer: [
    { nombre: 'Tóner HP', vence: '2025-07-01' },
    { nombre: 'Batería APC', vence: '2025-06-20' },
    { nombre: 'Cartucho Epson', vence: '2025-06-15' },
    { nombre: 'Pilas Duracell', vence: '2025-06-10' },
    { nombre: 'Disco SSD Kingston', vence: '2025-06-08' }
  ]
};

export default mockDashboardData;
