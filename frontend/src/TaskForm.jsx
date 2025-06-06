/**
 * TaskForm: Formulario para crear o editar tareas.
 * Props:
 *   - onSave: función para guardar la tarea
 *   - taskToEdit: tarea a editar (opcional)
 *   - onCancel: función para cancelar la edición
 * Maneja el estado local del título y descripción usando useState y useEffect.
 */
import React, { useState, useEffect } from 'react';

function TaskForm({ onSave, taskToEdit, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
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
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
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
    </form>
  );
}

export default TaskForm;
