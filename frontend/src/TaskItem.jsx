import React from 'react';

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <div className="task-item">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => onEdit(task)}>Editar</button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
}

export default TaskItem;
