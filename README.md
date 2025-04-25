# API REST - Gestión de Productos

## Características que hacen que esta sea una API REST

- Uso de verbos HTTP: `GET`, `POST`, `PUT`, `DELETE`.
- Las rutas representan recursos (`/productos`).
- Las respuestas están en formato JSON.
- Separación de capas: presentación (rutas), lógica de negocio (controladores) y acceso a datos (modelo).
- Manejo correcto de códigos de estado HTTP (`200`, `201`, `400`, `404`, `204`).

## Diferencias con la arquitectura anterior

| Característica                  | Arquitectura anterior     | API REST actual             |
|--------------------------------|----------------------------|-----------------------------|
| Tipo de respuesta              | HTML                       | JSON                        |
| Interacción con el cliente     | Formularios y navegación   | API con endpoints REST      |
| Enrutamiento                   | Acciones específicas       | Recursos REST               |
| HTTP methods utilizados        | Solo `GET` y `POST`        | `GET`, `POST`, `PUT`, `DELETE` |
| Formato de manejo de datos     | HTML embebido              | JSON puro                   |
| Control de errores             | Redirección                | Códigos de estado y mensajes |


