const model = require('../models/productoModel');

function mostrarHTML(req, res) {
  const productos = model.obtenerProductos();

  const lista = productos.map(p => `
    <li>
      <span>${p.nombre} - $${p.precio.toFixed(2)}</span>
      <form method="POST" action="/eliminar/${p.nombre}" class="inline-form">
        <button type="submit">Eliminar</button>
      </form>
    </li>
  `).join('');

  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Gestión de Productos</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 40px;
          background-color: #f4f4f4;
        }
        h1, h2 {
          color: #333;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          background: #fff;
          margin-bottom: 10px;
          padding: 10px;
          border-radius: 5px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        form {
          margin-top: 20px;
        }
        .inline-form {
          display: inline;
        }
        input, button {
          padding: 8px;
          margin: 5px;
        }
        button {
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <h1>Lista de Productos</h1>
      <ul>${lista}</ul>
      <h2>Agregar Producto</h2>
      <form method="POST" action="/productos">
        <input name="nombre" placeholder="Nombre" required />
        <input name="precio" placeholder="Precio" type="number" step="0.01" required />
        <button type="submit">Agregar</button>
      </form>
    </body>
    </html>
  `);
}

function listarProductos(req, res) {
  const productos = model.obtenerProductos();
  res.json(productos);
}

function crearProducto(req, res) {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Nombre y precio requeridos' });
  }
  model.agregarProducto(nombre, precio);
  res.redirect('/');
}

function eliminarProducto(req, res) {
  model.eliminarProducto(req.params.nombre);
  res.redirect('/');
}

module.exports = {
  mostrarHTML,
  listarProductos,
  crearProducto,
  eliminarProducto
};
