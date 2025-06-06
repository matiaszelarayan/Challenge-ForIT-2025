import React, { useState, useEffect } from 'react';

<<<<<<< HEAD
function TaskForm({ onSave, taskToEdit, onCancel }) {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
=======
/**
 * TaskForm: Formulario para crear o editar tareas.
 * Props:
 *   - onSave: función para guardar la tarea
 *   - taskToEdit: tarea a editar (opcional)
 *   - onCancel: función para cancelar la edición
 * Maneja el estado local del título y descripción usando useState y useEffect.
 */

function TaskForm({ onSave, taskToEdit, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
>>>>>>> 6efafd9 (app To Do List)

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
<<<<<<< HEAD
      setCompleted(taskToEdit.completed);
    } else {
      setTitle('');
      setCompleted(false);
=======
      setDescription(taskToEdit.description || '');
    } else {
      setTitle('');
      setDescription('');
>>>>>>> 6efafd9 (app To Do List)
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
<<<<<<< HEAD
    onSave({ ...taskToEdit, title, completed });
    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
=======
    onSave({ ...taskToEdit, title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Formulario de tarea" style={{
      background: 'var(--surface)',
      padding: '1.2em',
      borderRadius: '14px',
      marginBottom: '2em',
      boxShadow: '0 2px 8px #0002',
      maxWidth: 420,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.7em',
      alignItems: 'stretch',
    }}>
>>>>>>> 6efafd9 (app To Do List)
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
<<<<<<< HEAD
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
=======
        aria-label="Título de la tarea"
        maxLength={60}
        style={{ fontWeight: 600, fontSize: '1.08em', background: 'var(--bg)', color: 'var(--text)', border: '2px solid var(--primary)', borderRadius: 8, padding: '0.7em 1em' }}
      />
      <textarea
        placeholder="Descripción (opcional)"
        value={description}
        onChange={e => setDescription(e.target.value)}
        aria-label="Descripción de la tarea"
        rows={2}
        maxLength={120}
        style={{ resize: 'vertical', background: 'var(--surface)', color: 'var(--accent)', border: '1.5px solid var(--primary)', borderRadius: 8, fontSize: '1em', padding: '0.7em 1em' }}
      />
      <div style={{ display: 'flex', gap: '0.7em', marginTop: '0.5em', justifyContent: 'flex-end' }}>
        <button type="submit" style={{ background: 'var(--primary)', color: '#fff', fontWeight: 700, fontSize: '1em', padding: '0.6em 1.2em', borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px #0002', cursor: 'pointer', letterSpacing: '0.01em' }}>
          {taskToEdit ? 'Actualizar' : 'Agregar'}
        </button>
        {taskToEdit && (
          <button type="button" onClick={onCancel} style={{ background: 'var(--danger)', color: '#fff', fontWeight: 700, fontSize: '1em', padding: '0.6em 1.2em', borderRadius: '8px', border: 'none', boxShadow: '0 2px 8px #0002', cursor: 'pointer', letterSpacing: '0.01em' }}>
            Cancelar
          </button>
        )}
      </div>
>>>>>>> 6efafd9 (app To Do List)
    </form>
  );
}

export default TaskForm;
