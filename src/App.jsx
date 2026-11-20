import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  async function getTasks() {
    try{
    const response = await axios.get(`${API_URL}/tasks`);
    setTasks(
  response.data.map((task) => ({
    ...task,
    isComplete: task.is_complete,
  }))
);
    }
    catch(error){ 
    console.error("Error fechting tasks ", error);
    }
  }
  useEffect(() => {getTasks();}, []);

  async function toggleCompleteTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return;
  }

  let endpoint;

  if (!task.isComplete) {
    endpoint =`${API_URL}/tasks/${taskId}/mark_complete`;
  } else {
    endpoint = `${API_URL}/tasks/${taskId}/mark_incomplete`;
  }

  try {
    await axios.patch(endpoint);
    await getTasks();
  } catch (error) {
    console.error("Error updating task:", error);
  }
}

async function deleteTask(taskId) {
  try {
    await axios.delete(`${API_URL}/tasks/${taskId}`);
    await getTasks();
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}



  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} onClickCallBack={toggleCompleteTask} onDeleteCallBack={deleteTask} />}</div>
      </main>
    </div>
  );
};

export default App;
