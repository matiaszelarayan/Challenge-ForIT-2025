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

function TaskList({ tasks, onEdit, onDelete, onToggle, onDeleteCompleted }) {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.compled;
    if (filter === 'pending') return !task.compled;
    return true;
  });

  const completedCount = tasks.filter(t => t.compled).length;

  return (
    <div style={{ maxWidth: 370, margin: '0 auto', width: '100%' }}>
      <div style={{ marginBottom: '1em', display: 'flex', gap: '0.5em', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setFilter('all')} aria-pressed={filter === 'all'} style={{padding:'0.3em 0.7em',fontSize:'0.93em',borderRadius:'6px'}}>Todas</button>
        <button onClick={() => setFilter('completed')} aria-pressed={filter === 'completed'} style={{padding:'0.3em 0.7em',fontSize:'0.93em',borderRadius:'6px'}}>Completadas</button>
        <button onClick={() => setFilter('pending')} aria-pressed={filter === 'pending'} style={{padding:'0.3em 0.7em',fontSize:'0.93em',borderRadius:'6px'}}>Pendientes</button>
      </div>
      {filteredTasks.length === 0 ? (
        <p style={{textAlign:'center'}}>No hay tareas.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} />
        ))
      )}
      {completedCount > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.2em' }}>
          <button onClick={onDeleteCompleted} style={{ background: 'var(--danger)', color: '#fff', fontWeight: 700, fontSize: '0.93em', padding: '0.3em 1.1em', borderRadius: '6px', border: 'none', boxShadow: '0 2px 8px #0002', cursor: 'pointer', letterSpacing: '0.01em' }}>
            Borrar completadas
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskList;
