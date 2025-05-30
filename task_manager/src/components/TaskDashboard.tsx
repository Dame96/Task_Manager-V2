// TaskDashboard.tsx
import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import type { Task } from '../types';
import { Button } from 'react-bootstrap'; 


const TaskDashboard: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Task, 'id'>>({
    title: '',
    description: '',
    status: 'todo',
    createdAt: new Date(),
  });

  const handleSaveTask = () => {
    if (!formData.title || !formData.description) {
      setError('Title and Description are required');
      return;
    }
    if (editingTaskId) {
      updateTask(editingTaskId, formData);
      setEditingTaskId(null);
    } else {
      addTask(formData);
    }
    setFormData({
      title: '',
      description: '',
      status: 'todo',
      createdAt: new Date(),
    });
    setError(null);
  };

  const handleEditTask = (task: Task) => {
    setEditingTaskId(task.id);
    setFormData({
      title: task.title,
      description: task.description,
      status: task.status,
      createdAt: task.createdAt,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Task Dashboard</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>{editingTaskId ? 'Edit Task' : 'Add New Task'}</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <br />
        <select name="status" value={formData.status} onChange={handleInputChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <br />
        <Button variant="primary" onClick={handleSaveTask} className="mt-2">
          {editingTaskId ? 'Update Task' : 'Add Task'}
        </Button>
      </div>

      <div>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add one!</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              style={{
                border: '1px solid gray',
                marginBottom: '10px',
                padding: '10px',
              }}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <Button
                variant="warning"
                size="sm"
                onClick={() => handleEditTask(task)}
                className="me-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskDashboard;
