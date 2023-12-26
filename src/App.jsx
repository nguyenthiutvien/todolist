import React, { useState, useEffect } from "react";
import Header from "./Component/Header/header";
import Tasks from "./Component/Tasks/tasks";
import { MdDarkMode, MdSunny } from "react-icons/md";
import '../src/App.css'

const local_storage_key ='todoList'
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  const getTasks=()=> {
    const saved = localStorage.getItem(local_storage_key);
    if(saved) {
      setTasks(JSON.parse(saved));
    }
  }

  const saveTasks =(newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(local_storage_key, JSON.stringify(newTasks));
  }

  useEffect(() => {
    getTasks();
  }, [])

  const addTask = (title) => {
    saveTasks([...tasks, {
      id: Date.now(),
      title,
      completed: false
    }]);

  };

  const editTask = (id, title) => {
    const newTasks =  tasks.map((task) => (task.id === id ? { ...task, title } : task))
    saveTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    saveTasks(newTasks);

  };
  

  const isCompleted = (id) => {
    const newTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed} : task )
    saveTasks(newTasks)
  };

  const clearTasks = () => {
    saveTasks([]);
  };

  // const getCompletedTasks = () => tasks.filter((task) => task.completed);
  const numberTask = () => tasks.filter((task) => !task.completed);

  const changeTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div
      className="hero container-sun-mode">
      <div className="container">
        <div className="header-title">
          <h2>My Tasks</h2>
          <MdDarkMode onClick={changeTheme} className="icon-dark" size={32}/>
        </div>
        <div className="input-add-task">
          <Header addTask={addTask} />
        </div>
        <div className="top-card">
          <div className="top-card-title">
            <p className="task-left">{numberTask().length} tasks left</p>
            <button onClick={clearTasks}>Clear all tasks</button>
          </div>
          {tasks.length ? (
            <Tasks
              tasks={tasks}
              onEditTask={editTask}
              onDeleteTask={deleteTask}
              onCompletedTask={isCompleted}
            />
          ) : (
            <div className="task-content">
              <p>Empty task</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
