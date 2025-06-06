import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
<<<<<<< HEAD
import './App.css';
=======
import './index.css';
>>>>>>> 6efafd9 (app To Do List)

const API_URL = import.meta.env.VITE_API_URL;

/**
 * @typedef {Object} Task
 * @property {string} id - Identificador único de la tarea
 * @property {string} title - Título de la tarea
 * @property {string} description - Descripción de la tarea
 * @property {boolean} compled - Estado de la tarea (completada)
 * @property {string} createdAt - Fecha de creación (ISO string)
 */

<<<<<<< HEAD
=======
/**
 * App: Componente principal de la aplicación.
 * Maneja el estado global de tareas y la lógica de CRUD.
 * Utiliza hooks useState y useEffect para el manejo de estado y efectos.
 * Renderiza el formulario y la lista de tareas.
 */

>>>>>>> 6efafd9 (app To Do List)
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener todas las tareas
  useEffect(() => {
    fetch(`${API_URL}/api/tasks`)
      .then(res => res.json())
      .then(setTasks)
      .catch(() => setError('Error al cargar las tareas'))
      .finally(() => setLoading(false));
  }, []);

  // Crear o actualizar tarea
  const handleSave = (task) => {
    if (task.id) {
      // Actualizar
      fetch(`${API_URL}/api/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      })
        .then(res => res.json())
        .then(updated => {
          setTasks(tasks.map(t => t.id === updated.id ? updated : t));
          setTaskToEdit(null);
        });
    } else {
      // Crear
      fetch(`${API_URL}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      })
        .then(res => res.json())
        .then(newTask => setTasks([...tasks, newTask]));
    }
  };

  // Eliminar tarea
  const handleDelete = (id) => {
    fetch(`${API_URL}/api/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

<<<<<<< HEAD
=======
  // Cambiar estado de completado
  const handleToggle = (task) => {
    fetch(`${API_URL}/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, compled: !task.compled }),
    })
      .then(res => res.json())
      .then(updated => setTasks(tasks.map(t => t.id === updated.id ? updated : t)));
  };

>>>>>>> 6efafd9 (app To Do List)
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Router>
      <h1>Lista de Tareas</h1>
      <Routes>
        <Route path="/" element={
          <>
            <TaskForm onSave={handleSave} taskToEdit={taskToEdit} onCancel={() => setTaskToEdit(null)} />
<<<<<<< HEAD
            <TaskList tasks={tasks} onEdit={setTaskToEdit} onDelete={handleDelete} />
=======
            <TaskList tasks={tasks} onEdit={setTaskToEdit} onDelete={handleDelete} onToggle={handleToggle} />
>>>>>>> 6efafd9 (app To Do List)
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
