import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import "./TodoPage.css";

interface Task {
  _id: string;
  title: string;
  completed: boolean;
}

const TodoPage = () => {
  const { userId } = useParams(); 
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  
  useEffect(() => {
    fetch(`http://localhost:3001/api/getUserTodos/${userId}`)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [userId]);


  const handleAddTask = async () => {
    if (newTaskTitle.trim() === "") return;

    const newTask = { title: newTaskTitle };

    try {
      const response = await fetch(`http://localhost:3001/api/todos/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();
      setTasks([...tasks, data]); 
      setNewTaskTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await fetch(`http://localhost:3001/api/todos/${taskId}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };


  const handleToggleTaskCompletion = async (taskId: string) => {
    try {
      const task = tasks.find((task) => task._id === taskId);
      if (!task) return;

      const response = await fetch(`http://localhost:3001/api/todos/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });

      const updatedTask = await response.json();

      setTasks(tasks.map((task) => (task._id === taskId ? updatedTask : task)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="main-todo">
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
              <div key={task._id} className="task-item">
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                  {task.title}
                </span>

                <div className="opration_btn">
                  <button onClick={() => handleToggleTaskCompletion(task._id)} className="update_btn">
                    {task.completed ? "Undo" : "Complete"}
                  </button>

                  <button onClick={() => handleDeleteTask(task._id)} className="delte_btn">Delete</button>
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
