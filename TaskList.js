import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, toggleComplete, deleteTask, setEditingId, setEditText, editingId, saveEdit, editText }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          setEditingId={setEditingId}
          setEditText={setEditText}
          editingId={editingId}
          saveEdit={saveEdit}
          editText={editText}
        />
      ))}
    </ul>
  );
}

export default TaskList;
