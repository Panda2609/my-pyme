const mockProvidersData = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    email: "carlos.mendoza@proveedores.com",
    telefono: "+34 600 123 456",
    direccion: "Calle Mayor 123, Madrid",
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
    telefono: "+34 600 654 321",
    direccion: "Av. Libertad 45, Barcelona",
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
    telefono: "+34 600 789 123",
    direccion: "Calle Sol 77, Valencia",
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
    telefono: "+34 600 321 987",
    direccion: "Calle Luna 12, Sevilla",
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
    telefono: "+34 600 456 789",
    direccion: "Av. Andalucía 200, Málaga",
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
    telefono: "+34 600 987 654",
    direccion: "Calle Norte 8, Zaragoza",
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
    telefono: "+34 600 654 987",
    direccion: "Av. Central 55, Bilbao",
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
    telefono: "+34 600 852 963",
    direccion: "Calle Sur 33, Murcia",
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
    telefono: "+34 600 963 258",
    direccion: "Av. del Mar 100, Cádiz",
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
    telefono: "+34 600 741 852",
    direccion: "Calle Este 21, Valladolid",
    productos: ["Disco Duro WD", "Router Asus"],
    historial: [
      { producto: "Disco Duro WD", cantidad: 11, fecha: "2024-03-30" }
    ],
    fechaContratacion: "2024-02-20"
  }
];

export default mockProvidersData;
