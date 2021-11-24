import React, { useState } from "react";

import Task from "./components/Tasks"
import "./App.css"

const App = () => {
  // let message = "Ola!"
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

  return (
    <>
      <div className="container">
        < Task myTasks={tasks} />
      </div>
    </>
  );
};

export default App;
