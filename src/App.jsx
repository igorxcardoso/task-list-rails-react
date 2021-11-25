import React, { useState } from "react";
import Task from "./components/Tasks"
import AddTask from "./components/AddTask";
import "./App.css"

const App = () => {
  // let message = "Ola!"S
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: 'Estudar',
      completed: false
    },
    {
      id: 2,
      title: 'Corre',
      completed: true
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: Math.random(20),
        completed: false
      }
    ];
    setTask(newTasks);
  }

  return (
    <>
      <div className="container">
        < AddTask handleTaskAddition={handleTaskAddition} />
        < Task myTasks={tasks} />
      </div>
    </>
  );
};

export default App;
