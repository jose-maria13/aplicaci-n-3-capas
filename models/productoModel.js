let productos = [];

function obtenerProductos() {
  return productos;
}

function agregarProducto(nombre, precio) {
  const producto = { nombre, precio: parseFloat(precio) };
  productos.push(producto);
  return producto;
}

function eliminarProducto(nombre) {
  productos = productos.filter(p => p.nombre !== nombre);
}

module.exports = {
  obtenerProductos,
  agregarProducto,
  eliminarProducto
};
