import React, { useState, useEffect } from 'react';

function TaskForm({ onSave, taskToEdit, onCancel }) {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setCompleted(taskToEdit.completed);
    } else {
      setTitle('');
      setCompleted(false);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ ...taskToEdit, title, completed });
    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => setCompleted(e.target.checked)}
        />
        Completada
      </label>
      <button type="submit">{taskToEdit ? 'Actualizar' : 'Agregar'}</button>
      {taskToEdit && <button type="button" onClick={onCancel}>Cancelar</button>}
    </form>
  );
}

export default TaskForm;
