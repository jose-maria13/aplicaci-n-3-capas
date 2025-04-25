let productos = [];
let idActual = 1;

function obtenerProductos() {
  return productos;
}

function obtenerProductoPorId(id) {
  return productos.find(p => p.id === id);
}

function agregarProducto(nombre, precio) {
  const producto = { id: idActual++, nombre, precio: parseFloat(precio) };
  productos.push(producto);
  return producto;
}

function actualizarProducto(id, nombre, precio) {
  const producto = obtenerProductoPorId(id);
  if (producto) {
    producto.nombre = nombre;
    producto.precio = parseFloat(precio);
    return producto;
  }
  return null;
}

function eliminarProducto(id) {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  agregarProducto,
  actualizarProducto,
  eliminarProducto
};

