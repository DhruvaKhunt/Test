import React from 'react';
import './TaskItem.css';

function TaskItem({ task, toggleComplete, deleteTask, setEditingId, setEditText, editingId, saveEdit, editText }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {editingId === task.id ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button className="save-button" onClick={() => saveEdit(task.id)}>Save</button>
        </>
      ) : (
        <>
          <span
            className="task-text"
            onClick={() => toggleComplete(task.id)}
          >
            {task.text}
          </span>
          <div className="task-actions">
            <button onClick={() => { setEditingId(task.id); setEditText(task.text); }}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default TaskItem;
