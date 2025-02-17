import { useState } from 'react';
import './TodoPage.css';  

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TodoPage = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');

  
  const handleAddTask = () => {
    if (newTaskTitle.trim() === '') return; 
    const newTask = {
      id: tasks.length + 1, 
      title: newTaskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]); 
    setNewTaskTitle(''); 
  };

 
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id)); 
  };


  const handleToggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='main-todo'>
    <div className="todo-container">
      <h1>Task List</h1>

    
      <div className="new-task">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={handleAddTask}>New Task</button>
      </div>

  
      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-item">
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {task.title}
              </span>

             <div className='opration_btn'>
             <button onClick={() => handleToggleTaskCompletion(task.id)} className='update_btn'>
                {task.completed ? 'Undo' : 'Complete'}
              </button>

          
              <button onClick={() => handleDeleteTask(task.id)} className='delte_btn'>Delete</button>
             </div>
             
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default TodoPage;
