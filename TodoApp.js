import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './TodoApp.css';


function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Add Task
  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }]);
    }
  };

  // Edit Task
  const saveEdit = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: editText } : task
    ));
    setEditingId(null);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Mark Task as Completed
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-app-container">
      <h1 className='heading'>My To-Do List </h1>

      {/* Task Input */}
      <TaskInput addTask={addTask} />

      {/* Task List */}
      <TaskList 
        tasks={tasks} 
        toggleComplete={toggleComplete} 
        deleteTask={deleteTask}
        setEditingId={setEditingId}
        setEditText={setEditText}
        editingId={editingId}
        saveEdit={saveEdit}
        editText={editText}
      />
    </div>
  );
}

export default TodoApp;
