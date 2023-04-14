import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!newTask) {
      alert("You need to enter a task.");
      return;
    }

    const task = {
      key: Math.floor(Math.random() * 10000),
      value: newTask,
    };

    setTasks((prev) => [...prev, task]);
    setNewTask("");
  };

  const enterTask = () => {
    if (event.key === "Enter") {
      if (!newTask) {
        alert("You need to enter a task.");
        return;
      }

      const task = {
        key: Math.floor(Math.random() * 10000),
        value: newTask,
      };

      setTasks((prev) => [...prev, task]);
      setNewTask("");
    }
  };

  const deleteTask = (key) => {
    const tasksArr = tasks.filter((task) => task.key !== key);
    setTasks(tasksArr);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        className="tasksInput"
        type="text"
        placeholder="Add task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={() => enterTask()}
      ></input>
      <button className="tasksButton" onClick={() => addTask()}>
        Add
      </button>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.key}>
              {task.value}{" "}
              <button
                className="deleteButton"
                onClick={() => deleteTask(task.key)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
