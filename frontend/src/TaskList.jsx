/**
 * TaskList: Lista de tareas con filtros.
 * Props:
 *   - tasks: array de tareas
 *   - onEdit: función para editar
 *   - onDelete: función para eliminar
 *   - onToggle: función para marcar como completada/incompleta
 * Usa useState para el filtro local.
 */
import React, { useState } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.compled;
    if (filter === 'pending') return !task.compled;
    return true;
  });

  return (
    <div>
      <div style={{ marginBottom: '1em', display: 'flex', gap: '1em', justifyContent: 'center' }}>
        <button onClick={() => setFilter('all')} aria-pressed={filter === 'all'}>Todas</button>
        <button onClick={() => setFilter('completed')} aria-pressed={filter === 'completed'}>Completadas</button>
        <button onClick={() => setFilter('pending')} aria-pressed={filter === 'pending'}>Pendientes</button>
      </div>
      {filteredTasks.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} />
        ))
      )}
    </div>
  );
}

export default TaskList;
