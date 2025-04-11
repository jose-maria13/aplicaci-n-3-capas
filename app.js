const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controllers/productoController');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', controller.mostrarHTML);
app.get('/productos', controller.listarProductos);
app.post('/productos', controller.crearProducto);
app.post('/eliminar/:nombre', controller.eliminarProducto);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
