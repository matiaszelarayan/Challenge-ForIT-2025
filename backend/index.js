/**
 * index.js - API REST de tareas con Express
 *
 * Endpoints:
 *   - GET    /api/tasks        -> Listar todas las tareas
 *   - POST   /api/tasks        -> Crear una nueva tarea
 *   - PUT    /api/tasks/:id    -> Actualizar una tarea existente
 *   - DELETE /api/tasks/:id    -> Eliminar una tarea
 *
 * Estructura de datos:
 *   {
 *     id: string,
 *     title: string,
 *     description: string,
 *     compled: boolean,
 *     createdAt: Date
 *   }
 *
 * Almacenamiento en memoria. Incluye manejo de errores y CORS.
 */

// Servidor básico de tareas con Express
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Almacenamiento temporal en memoria
let tasks = [];
let nextId = 1;

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Crear una nueva tarea
app.post('/api/tasks', (req, res) => {
  const { title, description = '', compled = false } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'El título es requerido' });
  }
  const newTask = {
    id: String(nextId++),
    title,
    description,
    compled,
    createdAt: new Date().toISOString()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Actualizar una tarea existente
app.put('/api/tasks/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, compled } = req.body;
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (compled !== undefined) task.compled = compled;
  res.json(task);
});

// Eliminar una tarea
app.delete('/api/tasks/:id', (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }
  tasks.splice(index, 1);
  res.status(204).send();
});

// Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
