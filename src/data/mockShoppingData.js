
// Mock de compras (ingresos de stock)
// Cada compra: id, fecha, proveedor, factura, productos (array de texto), total, estado

const mockShoppingData = [
  {
    id: 1,
    fecha: '2025-07-15',
    proveedor: 'Distribuidora Andes',
    factura: 'F123456',
    productos: [
      'Papel A4 x 10 (precio unitario: $1500)',
      'Lápiz Pasta x 20 (precio unitario: $500)'
    ],
    total: '$25.000',
    estado: 'Ingresado'
  },
  {
    id: 2,
    fecha: '2025-07-10',
    proveedor: 'Comercial Sur',
    factura: 'F123457',
    productos: [
      'Cuaderno Universitario x 15 (precio unitario: $1200)',
      'Tóner HP x 2 (precio unitario: $35000)'
    ],
    total: '$61.000',
    estado: 'Ingresado'
  },
  {
    id: 3,
    fecha: '2025-07-05',
    proveedor: 'Proveeduría Central',
    factura: 'F123458',
    productos: [
      'Caja de Clips x 30 (precio unitario: $200)',
      'Resma de Papel x 5 (precio unitario: $3500)'
    ],
    total: '$21.000',
    estado: 'Pendiente'
  },
  {
    id: 4,
    fecha: '2025-06-28',
    proveedor: 'Importadora Pacífico',
    factura: 'F123459',
    productos: [
      'Carpeta Plástica x 12 (precio unitario: $800)',
      'Tijeras x 8 (precio unitario: $1200)'
    ],
    total: '$16.000',
    estado: 'Ingresado'
  },
  {
    id: 5,
    fecha: '2025-06-20',
    proveedor: 'Suministros del Norte',
    factura: 'F123460',
    productos: [
      'Corrector x 10 (precio unitario: $700)',
      'Marcador Permanente x 6 (precio unitario: $900)'
    ],
    total: '$10.400',
    estado: 'Ingresado'
  },
  {
    id: 6,
    fecha: '2025-06-10',
    proveedor: 'Almacén Mayorista',
    factura: 'F123461',
    productos: [
      'Cinta Adhesiva x 15 (precio unitario: $600)',
      'Archivador x 4 (precio unitario: $2500)'
    ],
    total: '$16.000',
    estado: 'Pendiente'
  },
  {
    id: 7,
    fecha: '2025-05-30',
    proveedor: 'Proveedores Chile',
    factura: 'F123462',
    productos: [
      'Calculadora x 2 (precio unitario: $8500)',
      'Goma de Borrar x 25 (precio unitario: $300)'
    ],
    total: '$20.500',
    estado: 'Ingresado'
  },
  {
    id: 8,
    fecha: '2025-05-20',
    proveedor: 'Mercado Industrial',
    factura: 'F123463',
    productos: [
      'Regla 30cm x 10 (precio unitario: $700)',
      'Papel A4 x 5 (precio unitario: $1500)'
    ],
    total: '$12.000',
    estado: 'Ingresado'
  },
  {
    id: 9,
    fecha: '2025-05-10',
    proveedor: 'Distribuciones Rápidas',
    factura: 'F123464',
    productos: [
      'Lápiz Pasta x 30 (precio unitario: $500)',
      'Cuaderno Universitario x 10 (precio unitario: $1200)'
    ],
    total: '$21.000',
    estado: 'Pendiente'
  },
  {
    id: 10,
    fecha: '2025-05-01',
    proveedor: 'Comercializadora Austral',
    factura: 'F123465',
    productos: [
      'Tóner HP x 1 (precio unitario: $35000)',
      'Caja de Clips x 20 (precio unitario: $200)'
    ],
    total: '$35.400',
    estado: 'Ingresado'
  }
  ,
  {
    id: 11,
    fecha: '2025-04-25',
    proveedor: 'Distribuidora Andes',
    factura: 'F123466',
    productos: [
      'Resma de Papel x 8 (precio unitario: $3200)',
      'Carpeta Plástica x 10 (precio unitario: $800)'
    ],
    total: '$32.400',
    estado: 'Ingresado'
  },
  {
    id: 12,
    fecha: '2025-04-15',
    proveedor: 'Comercial Sur',
    factura: 'F123467',
    productos: [
      'Tijeras x 12 (precio unitario: $1200)',
      'Corrector x 15 (precio unitario: $700)'
    ],
    total: '$20.100',
    estado: 'Pendiente'
  },
  {
    id: 13,
    fecha: '2025-04-10',
    proveedor: 'Proveeduría Central',
    factura: 'F123468',
    productos: [
      'Marcador Permanente x 10 (precio unitario: $900)',
      'Cinta Adhesiva x 20 (precio unitario: $600)'
    ],
    total: '$21.000',
    estado: 'Ingresado'
  },
  {
    id: 14,
    fecha: '2025-03-30',
    proveedor: 'Importadora Pacífico',
    factura: 'F123469',
    productos: [
      'Archivador x 6 (precio unitario: $2500)',
      'Calculadora x 1 (precio unitario: $8500)'
    ],
    total: '$23.500',
    estado: 'Ingresado'
  },
  {
    id: 15,
    fecha: '2025-03-20',
    proveedor: 'Suministros del Norte',
    factura: 'F123470',
    productos: [
      'Goma de Borrar x 30 (precio unitario: $300)',
      'Regla 30cm x 15 (precio unitario: $700)'
    ],
    total: '$13.500',
    estado: 'Pendiente'
  },
  {
    id: 16,
    fecha: '2025-03-10',
    proveedor: 'Almacén Mayorista',
    factura: 'F123471',
    productos: [
      'Papel A4 x 12 (precio unitario: $1500)',
      'Lápiz Pasta x 25 (precio unitario: $500)'
    ],
    total: '$25.500',
    estado: 'Ingresado'
  },
  {
    id: 17,
    fecha: '2025-02-28',
    proveedor: 'Proveedores Chile',
    factura: 'F123472',
    productos: [
      'Cuaderno Universitario x 20 (precio unitario: $1200)',
      'Tóner HP x 3 (precio unitario: $35000)'
    ],
    total: '$89.000',
    estado: 'Ingresado'
  },
  {
    id: 18,
    fecha: '2025-02-20',
    proveedor: 'Mercado Industrial',
    factura: 'F123473',
    productos: [
      'Caja de Clips x 40 (precio unitario: $200)',
      'Resma de Papel x 7 (precio unitario: $3500)'
    ],
    total: '$28.800',
    estado: 'Pendiente'
  },
  {
    id: 19,
    fecha: '2025-02-10',
    proveedor: 'Distribuciones Rápidas',
    factura: 'F123474',
    productos: [
      'Carpeta Plástica x 15 (precio unitario: $800)',
      'Tijeras x 10 (precio unitario: $1200)'
    ],
    total: '$18.000',
    estado: 'Ingresado'
  },
  {
    id: 20,
    fecha: '2025-02-01',
    proveedor: 'Comercializadora Austral',
    factura: 'F123475',
    productos: [
      'Corrector x 12 (precio unitario: $700)',
      'Marcador Permanente x 8 (precio unitario: $900)'
    ],
    total: '$11.400',
    estado: 'Ingresado'
  },
  {
    id: 21,
    fecha: '2025-01-25',
    proveedor: 'Distribuidora Andes',
    factura: 'F123476',
    productos: [
      'Cinta Adhesiva x 18 (precio unitario: $600)',
      'Archivador x 5 (precio unitario: $2500)'
    ],
    total: '$17.300',
    estado: 'Pendiente'
  },
  {
    id: 22,
    fecha: '2025-01-15',
    proveedor: 'Comercial Sur',
    factura: 'F123477',
    productos: [
      'Calculadora x 3 (precio unitario: $8500)',
      'Goma de Borrar x 20 (precio unitario: $300)'
    ],
    total: '$26.500',
    estado: 'Ingresado'
  },
  {
    id: 23,
    fecha: '2025-01-10',
    proveedor: 'Proveeduría Central',
    factura: 'F123478',
    productos: [
      'Regla 30cm x 12 (precio unitario: $700)',
      'Papel A4 x 7 (precio unitario: $1500)'
    ],
    total: '$14.900',
    estado: 'Ingresado'
  },
  {
    id: 24,
    fecha: '2024-12-28',
    proveedor: 'Importadora Pacífico',
    factura: 'F123479',
    productos: [
      'Lápiz Pasta x 35 (precio unitario: $500)',
      'Cuaderno Universitario x 8 (precio unitario: $1200)'
    ],
    total: '$19.600',
    estado: 'Pendiente'
  },
  {
    id: 25,
    fecha: '2024-12-20',
    proveedor: 'Suministros del Norte',
    factura: 'F123480',
    productos: [
      'Tóner HP x 2 (precio unitario: $35000)',
      'Caja de Clips x 25 (precio unitario: $200)'
    ],
    total: '$70.500',
    estado: 'Ingresado'
  },
  {
    id: 26,
    fecha: '2024-12-10',
    proveedor: 'Almacén Mayorista',
    factura: 'F123481',
    productos: [
      'Resma de Papel x 6 (precio unitario: $3500)',
      'Carpeta Plástica x 14 (precio unitario: $800)'
    ],
    total: '$27.400',
    estado: 'Ingresado'
  },
  {
    id: 27,
    fecha: '2024-11-30',
    proveedor: 'Proveedores Chile',
    factura: 'F123482',
    productos: [
      'Tijeras x 9 (precio unitario: $1200)',
      'Corrector x 18 (precio unitario: $700)'
    ],
    total: '$18.600',
    estado: 'Pendiente'
  },
  {
    id: 28,
    fecha: '2024-11-20',
    proveedor: 'Mercado Industrial',
    factura: 'F123483',
    productos: [
      'Marcador Permanente x 7 (precio unitario: $900)',
      'Cinta Adhesiva x 22 (precio unitario: $600)'
    ],
    total: '$17.400',
    estado: 'Ingresado'
  },
  {
    id: 29,
    fecha: '2024-11-10',
    proveedor: 'Distribuciones Rápidas',
    factura: 'F123484',
    productos: [
      'Archivador x 3 (precio unitario: $2500)',
      'Calculadora x 2 (precio unitario: $8500)'
    ],
    total: '$22.000',
    estado: 'Ingresado'
  },
  {
    id: 30,
    fecha: '2024-11-01',
    proveedor: 'Comercializadora Austral',
    factura: 'F123485',
    productos: [
      'Goma de Borrar x 28 (precio unitario: $300)',
      'Regla 30cm x 18 (precio unitario: $700)'
    ],
    total: '$17.400',
    estado: 'Pendiente'
  },
  {
    id: 31,
    fecha: '2024-10-25',
    proveedor: 'Distribuidora Andes',
    factura: 'F123486',
    productos: [
      'Papel A4 x 9 (precio unitario: $1500)',
      'Lápiz Pasta x 22 (precio unitario: $500)'
    ],
    total: '$18.500',
    estado: 'Ingresado'
  },
  {
    id: 32,
    fecha: '2024-10-15',
    proveedor: 'Comercial Sur',
    factura: 'F123487',
    productos: [
      'Cuaderno Universitario x 13 (precio unitario: $1200)',
      'Tóner HP x 1 (precio unitario: $35000)'
    ],
    total: '$50.600',
    estado: 'Ingresado'
  },
  {
    id: 33,
    fecha: '2024-10-10',
    proveedor: 'Proveeduría Central',
    factura: 'F123488',
    productos: [
      'Caja de Clips x 32 (precio unitario: $200)',
      'Resma de Papel x 4 (precio unitario: $3500)'
    ],
    total: '$16.400',
    estado: 'Pendiente'
  }
];

export default mockShoppingData;
