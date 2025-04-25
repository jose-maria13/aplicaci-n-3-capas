const model = require('../models/productoModel');

function listarProductos(req, res) {
  const productos = model.obtenerProductos();
  res.json(productos);
}

function obtenerProducto(req, res) {
  const id = parseInt(req.params.id);
  const producto = model.obtenerProductoPorId(id);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(producto);
}

function crearProducto(req, res) {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Nombre y precio requeridos' });
  }
  const nuevoProducto = model.agregarProducto(nombre, precio);
  res.status(201).json(nuevoProducto);
}

function actualizarProducto(req, res) {
  const id = parseInt(req.params.id);
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Nombre y precio requeridos' });
  }
  const actualizado = model.actualizarProducto(id, nombre, precio);
  if (!actualizado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(actualizado);
}

function eliminarProducto(req, res) {
  const id = parseInt(req.params.id);
  const eliminado = model.eliminarProducto(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.status(204).send(); // Sin contenido
}

module.exports = {
  listarProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};
