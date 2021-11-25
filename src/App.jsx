import React, { useState } from "react";
import {v4 as uuidv4} from "uuid"
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import Header from "./components/Header";

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
    // Vai pecorrer a lista e vai tirar a task que o id foi passado
    setTask(newTasks);
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />

          <Route exact path = "/" render={() => {
            return (
              <>
                < AddTask handleTaskAddition={handleTaskAddition} />
                < Tasks 
                myTasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleTaskDelettion={handleTaskDelettion}
                />
              </>
            )
          }}/>

          <Route />
  
      </div>
    </BrowserRouter>
  );
};

export default App;
