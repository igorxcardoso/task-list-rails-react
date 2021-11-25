import React from "react";
import "./Task.css";

const Task = ({ taskComponent }) => {
    return ( 
        <div className="task-container"> { taskComponent.title } </div> 
    );
}

export default Task;