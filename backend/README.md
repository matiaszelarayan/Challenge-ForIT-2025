# Carpeta para el backend (Node.js)

# Backend - API de Lista de Tareas

Este backend está construido con Node.js y Express. Proporciona una API REST para gestionar tareas.

## Instalación y ejecución

1. Instala las dependencias:
   ```powershell
   npm install
   ```
2. Inicia el servidor:
   ```powershell
   npm start
   ```
   El servidor escuchará en el puerto 3000 por defecto.

## Variables de entorno
- `PORT`: Puerto en el que se ejecuta el servidor (por defecto 3000).

## Endpoints

### GET /api/tasks
Obtiene todas las tareas.

### POST /api/tasks
Crea una nueva tarea.
- Body JSON:
  ```json
  {
    "title": "string",
    "description": "string",
    "compled": false
  }
  ```

### PUT /api/tasks/:id
Actualiza una tarea existente.
- Body JSON:
  ```json
  {
    "title": "string",
    "description": "string",
    "compled": false
  }
  ```

### DELETE /api/tasks/:id
Elimina una tarea por su id.

## Estructura de datos
```js
interface Task {
  id: string;
  title: string;
  description: string;
  compled: boolean;
  createdAt: Date;
}
```

## Notas
- El almacenamiento es en memoria (se pierde al reiniciar el servidor).
- Incluye manejo básico de errores y CORS habilitado para desarrollo frontend.
