import React, { useState } from 'react';
import './TaskInput.css';

function TaskInput({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-container">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="task-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}

export default TaskInput;
