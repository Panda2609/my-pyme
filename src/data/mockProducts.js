// Datos simulados de productos para inventario

const mockProducts = [
  {
    id: 1,
    name: 'Laptop HP',
    codigo: 'HP001',
    cantidad: 12,
    categoria: 'Electrónica',
    precio: 15000,
    proveedor: 'HP',
    date: '2025-05-24',
    status: 'Activo'
  },
  {
    id: 2,
    name: 'Mouse Logitech',
    codigo: 'LOG002',
    cantidad: 30,
    categoria: 'Accesorios',
    precio: 350,
    proveedor: 'Logitech',
    date: '2025-05-25',
    status: 'Activo'
  },
  {
    id: 3,
    name: 'Monitor Samsung',
    codigo: 'SAM003',
    cantidad: 7,
    categoria: 'Electrónica',
    precio: 4200,
    proveedor: 'Samsung',
    date: '2025-05-26',
    status: 'Activo'
  },
  {
    id: 4,
    name: 'Teclado Redragon',
    codigo: 'RED004',
    cantidad: 15,
    categoria: 'Accesorios',
    precio: 800,
    proveedor: 'Redragon',
    date: '2025-05-27',
    status: 'Inactivo'
  },
  {
    id: 5,
    name: 'Auriculares Sony',
    codigo: 'SON005',
    cantidad: 20,
    categoria: 'Electrónica',
    precio: 1200,
    proveedor: 'Sony',
    date: '2025-05-28',
    status: 'Activo'
  },
  {
    id: 6,
    name: 'Tablet Lenovo',
    codigo: 'LEN006',
    cantidad: 8,
    categoria: 'Electrónica',
    precio: 3500,
    proveedor: 'Lenovo',
    date: '2025-05-29',
    status: 'Activo'
  },

  {
    id: 8,
    name: 'Webcam Logitech',
    codigo: 'LOG008',
    cantidad: 10,
    categoria: 'Accesorios',
    precio: 600,
    proveedor: 'Logitech',
    date: '2025-06-01',
    status: 'Activo'
  },
  {
    id: 9,
    name: 'Router TP-Link',
    codigo: 'TPL009',
    cantidad: 7,
    categoria: 'Electrónica',
    precio: 900,
    proveedor: 'TP-Link',
    date: '2025-06-02',
    status: 'Activo'
  },
  {
    id: 10,
    name: 'USB Kingston',
    codigo: 'KIN010',
    cantidad: 25,
    categoria: 'Accesorios',
    precio: 200,
    proveedor: 'Kingston',
    date: '2025-06-03',
    status: 'Activo'
  },
  {
    id: 11,
    name: 'Batería Dell',
    codigo: 'DEL011',
    cantidad: 4,
    categoria: 'Electrónica',
    precio: 1100,
    proveedor: 'Dell',
    date: '2025-06-04',
    status: 'Inactivo'
  },
  {
    id: 12,
    name: 'Teclado Genius',
    codigo: 'GEN012',
    cantidad: 9,
    categoria: 'Accesorios',
    precio: 350,
    proveedor: 'Genius',
    date: '2025-06-05',
    status: 'Activo'
  },
  {
    id: 13,
    name: 'Monitor LG',
    codigo: 'LG013',
    cantidad: 6,
    categoria: 'Electrónica',
    precio: 4100,
    proveedor: 'LG',
    date: '2025-06-06',
    status: 'Activo'
  },
  {
    id: 14,
    name: 'Cargador Lenovo',
    codigo: 'LEN014',
    cantidad: 13,
    categoria: 'Accesorios',
    precio: 450,
    proveedor: 'Lenovo',
    date: '2025-06-07',
    status: 'Activo'
  },
  {
    id: 15,
    name: 'Tablet Samsung',
    codigo: 'SAM015',
    cantidad: 5,
    categoria: 'Electrónica',
    precio: 3700,
    proveedor: 'Samsung',
    date: '2025-06-08',
    status: 'Inactivo'
  },
  {
    id: 16,
    name: 'Auriculares JBL',
    codigo: 'JBL016',
    cantidad: 18,
    categoria: 'Electrónica',
    precio: 1300,
    proveedor: 'JBL',
    date: '2025-06-09',
    status: 'Activo'
  },
  {
    id: 17,
    name: 'Mouse HP',
    codigo: 'HP017',
    cantidad: 14,
    categoria: 'Accesorios',
    precio: 320,
    proveedor: 'HP',
    date: '2025-06-10',
    status: 'Activo'
  },
  {
    id: 18,
    name: 'Impresora Canon',
    codigo: 'CAN018',
    cantidad: 3,
    categoria: 'Impresoras',
    precio: 4300,
    proveedor: 'Canon',
    date: '2025-06-11',
    status: 'Activo'
  },
  {
    id: 19,
    name: 'Monitor Philips',
    codigo: 'PHI019',
    cantidad: 8,
    categoria: 'Electrónica',
    precio: 4000,
    proveedor: 'Philips',
    date: '2025-06-12',
    status: 'Activo'
  },
  {
    id: 20,
    name: 'Tablet Huawei',
    codigo: 'HUA020',
    cantidad: 7,
    categoria: 'Electrónica',
    precio: 3600,
    proveedor: 'Huawei',
    date: '2025-06-13',
    status: 'Inactivo'
  },
  {
    id: 21,
    name: 'Auriculares Bose',
    codigo: 'BOS021',
    cantidad: 11,
    categoria: 'Electrónica',
    precio: 2100,
    proveedor: 'Bose',
    date: '2025-06-14',
    status: 'Activo'
  },
  {
    id: 22,
    name: 'Teclado Logitech',
    codigo: 'LOG022',
    cantidad: 16,
    categoria: 'Accesorios',
    precio: 400,
    proveedor: 'Logitech',
    date: '2025-06-15',
    status: 'Activo'
  },
  {
    id: 23,
    name: 'Impresora Brother',
    codigo: 'BRO023',
    cantidad: 2,
    categoria: 'Impresoras',
    precio: 4100,
    proveedor: 'Brother',
    date: '2025-06-16',
    status: 'Activo'
  },
  {
    id: 24,
    name: 'Monitor Acer',
    codigo: 'ACE024',
    cantidad: 9,
    categoria: 'Electrónica',
    precio: 3900,
    proveedor: 'Acer',
    date: '2025-06-17',
    status: 'Activo'
  },
  {
    id: 25,
    name: 'Tablet Apple',
    codigo: 'APP025',
    cantidad: 6,
    categoria: 'Electrónica',
    precio: 8000,
    proveedor: 'Apple',
    date: '2025-06-18',
    status: 'Activo'
  },
  {
    id: 26,
    name: 'Auriculares Panasonic',
    codigo: 'PAN026',
    cantidad: 10,
    categoria: 'Electrónica',
    precio: 1100,
    proveedor: 'Panasonic',
    date: '2025-06-19',
    status: 'Inactivo'
  },
  {
    id: 27,
    name: 'Mouse Genius',
    codigo: 'GEN027',
    cantidad: 17,
    categoria: 'Accesorios',
    precio: 310,
    proveedor: 'Genius',
    date: '2025-06-20',
    status: 'Activo'
  },
  {
    id: 28,
    name: 'Impresora Samsung',
    codigo: 'SAM028',
    cantidad: 4,
    categoria: 'Impresoras',
    precio: 4400,
    proveedor: 'Samsung',
    date: '2025-06-21',
    status: 'Activo'
  }
];

export default mockProducts;
