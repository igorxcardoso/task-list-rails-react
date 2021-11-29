import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from "uuid"
import { BrowserRouter, Route} from "react-router-dom";
import axios from "axios";

import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import "./App.css"

const App = () => {
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

  // O código será executado sempre que as varíaveis que foram passas mudar
  useEffect(() => {
    const fetchTask = async () => {
      const { data } = await axios.get(
        "http://127.0.0.1:3001/tasks"
      );

      // console.log(data);
      setTask(data)
    };

    fetchTask();
  }, [tasks]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map( t => {
      if(t.id === taskId) {
        return {
          ...t,
          completed: !t.completed
        }
      }
      return t;
    });
    setTask(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
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

          <Route path="/:taskTitle" exact component={TaskDetails}/>
  
      </div>
    </BrowserRouter>
  );
};

export default App;
