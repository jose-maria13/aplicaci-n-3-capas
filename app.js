const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controllers/productoController');

app.use(express.json());

// Endpoints REST
app.get('/productos', controller.listarProductos);        
app.post('/productos', controller.crearProducto);         
app.get('/productos/:id', controller.obtenerProducto);    
app.put('/productos/:id', controller.actualizarProducto); 
app.delete('/productos/:id', controller.eliminarProducto); 

app.listen(port, () => {
  console.log(`API REST corriendo en http://localhost:${port}`);
});
