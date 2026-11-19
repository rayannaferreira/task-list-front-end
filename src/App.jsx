import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
  {
    id: 3,
    title: 'Organize my room',
    isComplete: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const toggleTask = (id) => {
    setTasks((currentTasks) => {
      const updatedTasks = [];

      for (const task of currentTasks) {
        if (task.id === id) {
          const updatedTask = {
            ...task,
            isComplete: !task.isComplete,
          };

          updatedTasks.push(updatedTask);
        } else {
          updatedTasks.push(task);
        }
      }

      return updatedTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
      const remainingTasks = [];

      for (const task of currentTasks) {
        if (task.id !== id) {
          remainingTasks.push(task);
        }
      }

      return remainingTasks;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} onClickCallBack={toggleTask} onDeleteCallBack={deleteTask} />}</div>
      </main>
    </div>
  );
};

export default App;
