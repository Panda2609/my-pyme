const mockSalesData = [
  {
    id: 1,
    fecha: "2024-01-05",
    cliente: "Juan Pérez",
    productos: [
      { nombre: "Laptop HP", cantidad: 1, precio: 600000 },
      { nombre: "Mouse Logitech", cantidad: 2, precio: 15000 }
    ],
    total: 630000
  },
  {
    id: 2,
    fecha: "2024-01-06",
    cliente: "María Gómez",
    productos: [
      { nombre: "Monitor Samsung", cantidad: 1, precio: 120000 }
    ],
    total: 120000
  },
  {
    id: 3,
    fecha: "2024-01-07",
    cliente: "Carlos Ruiz",
    productos: [
      { nombre: "Teclado Redragon", cantidad: 1, precio: 35000 },
      { nombre: "Silla Gamer", cantidad: 1, precio: 90000 }
    ],
    total: 125000
  },
  {
    id: 4,
    fecha: "2024-01-08",
    cliente: "Ana Torres",
    productos: [
      { nombre: "Impresora Epson", cantidad: 1, precio: 80000 }
    ],
    total: 80000
  },
  {
    id: 5,
    fecha: "2024-01-09",
    cliente: "Pedro Sánchez",
    productos: [
      { nombre: "Tablet Lenovo", cantidad: 2, precio: 150000 }
    ],
    total: 300000
  },
  {
    id: 6,
    fecha: "2024-01-10",
    cliente: "Lucía Fernández",
    productos: [
      { nombre: "Auriculares Sony", cantidad: 1, precio: 40000 }
    ],
    total: 40000
  },
  {
    id: 7,
    fecha: "2024-01-11",
    cliente: "Miguel Castro",
    productos: [
      { nombre: "Disco Duro Seagate", cantidad: 1, precio: 55000 }
    ],
    total: 55000
  },
  {
    id: 8,
    fecha: "2024-01-12",
    cliente: "Sofía Herrera",
    productos: [
      { nombre: "Router TP-Link", cantidad: 1, precio: 25000 }
    ],
    total: 25000
  },
  {
    id: 9,
    fecha: "2024-01-13",
    cliente: "Javier Morales",
    productos: [
      { nombre: "Monitor LG", cantidad: 1, precio: 110000 },
      { nombre: "Webcam Logitech", cantidad: 1, precio: 20000 }
    ],
    total: 130000
  },
  {
    id: 10,
    fecha: "2024-01-14",
    cliente: "Valentina Ríos",
    productos: [
      { nombre: "Mousepad SteelSeries", cantidad: 1, precio: 12000 }
    ],
    total: 12000
  },
  // ... 40 ventas más ...
];

// Generar 40 ventas adicionales
for (let i = 11; i <= 50; i++) {
  const day = (i % 28) + 1;
  const month = Math.floor((i - 1) / 28) + 2;
  const fecha = `2024-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const clientes = [
    "Juan Pérez", "María Gómez", "Carlos Ruiz", "Ana Torres", "Pedro Sánchez",
    "Lucía Fernández", "Miguel Castro", "Sofía Herrera", "Javier Morales", "Valentina Ríos"
  ];
  const productosCatalogo = [
    { nombre: "Laptop HP", precio: 600000 },
    { nombre: "Mouse Logitech", precio: 15000 },
    { nombre: "Monitor Samsung", precio: 120000 },
    { nombre: "Teclado Redragon", precio: 35000 },
    { nombre: "Silla Gamer", precio: 90000 },
    { nombre: "Impresora Epson", precio: 80000 },
    { nombre: "Tablet Lenovo", precio: 150000 },
    { nombre: "Auriculares Sony", precio: 40000 },
    { nombre: "Disco Duro Seagate", precio: 55000 },
    { nombre: "Router TP-Link", precio: 25000 }
  ];
  const cliente = clientes[Math.floor(Math.random() * clientes.length)];
  // Seleccionar 1 a 3 productos aleatorios
  const numProductos = Math.floor(Math.random() * 3) + 1;
  const productos = [];
  let total = 0;
  for (let j = 0; j < numProductos; j++) {
    const prod = productosCatalogo[Math.floor(Math.random() * productosCatalogo.length)];
    const cantidad = Math.floor(Math.random() * 3) + 1;
    productos.push({ nombre: prod.nombre, cantidad, precio: prod.precio });
    total += cantidad * prod.precio;
  }
  mockSalesData.push({ id: i, fecha, cliente, productos, total });
}

export default mockSalesData;
