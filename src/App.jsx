import React, { useState } from "react";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import "./App.css"
import {v4 as uuidv4} from "uuid"

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

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map( t => {
      if(t.id === taskId) {
        return {
          ... t,
          completed: !t.completed
        }
      }
      return t;
    });
    setTask(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ];
    setTask(newTasks);
  };

  const handleTaskDelettion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    
    setTask(newTasks);
  }

  return (
    <>
      <div className="container">
        < AddTask handleTaskAddition={handleTaskAddition} />
        
        < Tasks 
          myTasks={tasks} 
          handleTaskClick={handleTaskClick} 
          handleTaskDelettion={handleTaskDelettion}
        />
      </div>
    </>
  );
};

export default App;
