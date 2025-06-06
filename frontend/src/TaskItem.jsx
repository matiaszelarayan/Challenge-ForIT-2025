/**
 * TaskItem: Componente visual para mostrar una tarea.
 * Props:
 *   - task: objeto tarea
 *   - onEdit: función para editar
 *   - onDelete: función para eliminar
 *   - onToggle: función para marcar como completada/incompleta
 * Visualiza título y descripción, y botones de acción.
 */
import React from 'react';

function TaskItem({ task, onEdit, onDelete, onToggle }) {
  return (
    <div className="task-item" style={{
      background: 'var(--surface)',
      padding: '1.2em',
      borderRadius: '14px',
      marginBottom: '1.2em',
      boxShadow: '0 2px 8px #0002',
      maxWidth: 420,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7em',
      alignItems: 'stretch',
      minWidth: 0,
      width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', justifyContent: 'space-between' }}>
        <span style={{
          flex: 1,
          fontSize: '1.08em',
          fontWeight: 600,
          wordBreak: 'break-word',
          textAlign: 'left',
          color: 'var(--text)',
          letterSpacing: '0.01em',
          textShadow: '0 1px 2px #0005',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}>
          <strong>{task.title}</strong>
          {task.description && (
            <span style={{ fontWeight: 400, fontSize: '0.97em', color: '#f59e42', marginTop: 2 }}>
              {task.description}
            </span>
          )}
        </span>
        <button onClick={() => onToggle && onToggle(task)} aria-label="Marcar como completada/incompleta" style={{ fontSize: '1.1em', background: 'transparent', color: task.compled ? '#22c55e' : '#fff', boxShadow: 'none', padding: '0.2em 0.5em', border: 'none' }}>
          {task.compled ? '✅' : '⬜'}
        </button>
        <button onClick={() => onEdit(task)} style={{ background: '#23232a', color: '#7c3aed', fontWeight: 600, fontSize: '0.95em', padding: '0.4em 1em', borderRadius: 6, border: 'none', boxShadow: '0 1px 4px #0001', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}>
          Editar
        </button>
        <button onClick={() => onDelete(task.id)} style={{ background: '#ef4444', color: '#fff', fontWeight: 600, fontSize: '0.95em', padding: '0.4em 1em', borderRadius: 6, border: 'none', boxShadow: '0 1px 4px #0001', cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}>
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
