const mockProvidersData = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    email: "carlos.mendoza@proveedores.com",
    telefono: "+56 9 9123 4567",
    direccion: "Av. Providencia 1234, Santiago",
    productos: ["Laptop HP", "Mouse Logitech"],
    historial: [
      { producto: "Laptop HP", cantidad: 10, fecha: "2024-01-15" },
      { producto: "Mouse Logitech", cantidad: 25, fecha: "2024-03-10" }
    ],
    fechaContratacion: "2023-12-01"
  },
  {
    id: 2,
    nombre: "María Torres",
    email: "maria.torres@proveedores.com",
    telefono: "+56 9 8765 4321",
    direccion: "Calle O'Higgins 45, Viña del Mar",
    productos: ["Monitor Samsung", "Teclado Redragon"],
    historial: [
      { producto: "Monitor Samsung", cantidad: 8, fecha: "2024-02-20" }
    ],
    fechaContratacion: "2024-01-10"
  },
  {
    id: 3,
    nombre: "Javier Ruiz",
    email: "javier.ruiz@proveedores.com",
    telefono: "+56 9 9988 7766",
    direccion: "Av. Pedro de Valdivia 77, Temuco",
    productos: ["Impresora Epson", "Router TP-Link"],
    historial: [
      { producto: "Impresora Epson", cantidad: 5, fecha: "2024-03-05" },
      { producto: "Router TP-Link", cantidad: 12, fecha: "2024-04-01" }
    ],
    fechaContratacion: "2024-02-15"
  },
  {
    id: 4,
    nombre: "Ana López",
    email: "ana.lopez@proveedores.com",
    telefono: "+56 9 8877 6655",
    direccion: "Calle Prat 12, Concepción",
    productos: ["Tablet Lenovo", "Auriculares Sony"],
    historial: [
      { producto: "Tablet Lenovo", cantidad: 7, fecha: "2024-01-25" }
    ],
    fechaContratacion: "2023-11-20"
  },
  {
    id: 5,
    nombre: "Pedro García",
    email: "pedro.garcia@proveedores.com",
    telefono: "+56 9 7766 5544",
    direccion: "Av. Alemania 200, Valdivia",
    productos: ["Disco Duro Seagate", "Webcam Logitech"],
    historial: [
      { producto: "Disco Duro Seagate", cantidad: 15, fecha: "2024-03-18" }
    ],
    fechaContratacion: "2024-02-01"
  },
  {
    id: 6,
    nombre: "Lucía Fernández",
    email: "lucia.fernandez@proveedores.com",
    telefono: "+56 9 6655 4433",
    direccion: "Calle Colón 8, Antofagasta",
    productos: ["Monitor LG", "Mousepad SteelSeries"],
    historial: [
      { producto: "Monitor LG", cantidad: 6, fecha: "2024-04-10" }
    ],
    fechaContratacion: "2024-03-01"
  },
  {
    id: 7,
    nombre: "Miguel Castro",
    email: "miguel.castro@proveedores.com",
    telefono: "+56 9 5544 3322",
    direccion: "Av. Matta 55, La Serena",
    productos: ["Laptop Dell", "Teclado Logitech"],
    historial: [
      { producto: "Laptop Dell", cantidad: 9, fecha: "2024-02-28" }
    ],
    fechaContratacion: "2024-01-15"
  },
  {
    id: 8,
    nombre: "Sofía Herrera",
    email: "sofia.herrera@proveedores.com",
    telefono: "+56 9 4433 2211",
    direccion: "Calle San Martín 33, Rancagua",
    productos: ["Monitor Asus", "Tablet Samsung"],
    historial: [
      { producto: "Monitor Asus", cantidad: 4, fecha: "2024-03-22" }
    ],
    fechaContratacion: "2024-02-10"
  },
  {
    id: 9,
    nombre: "Andrés Vargas",
    email: "andres.vargas@proveedores.com",
    telefono: "+56 9 3322 1100",
    direccion: "Av. del Mar 100, Coquimbo",
    productos: ["Impresora HP", "Auriculares JBL"],
    historial: [
      { producto: "Impresora HP", cantidad: 3, fecha: "2024-04-05" }
    ],
    fechaContratacion: "2024-03-15"
  },
  {
    id: 10,
    nombre: "Gabriela Castro",
    email: "gabriela.castro@proveedores.com",
    telefono: "+56 9 2211 0099",
    direccion: "Calle Baquedano 21, Iquique",
    productos: ["Disco Duro WD", "Router Asus"],
    historial: [
      { producto: "Disco Duro WD", cantidad: 11, fecha: "2024-03-30" }
    ],
    fechaContratacion: "2024-02-20"
  }
];

export default mockProvidersData;
