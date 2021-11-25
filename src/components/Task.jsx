import React from "react";
import "./Task.css";

const Task = ({ currentTask, handleTaskClick }) => {
    return ( 
        <div 
         className="task-container" 
         style={currentTask.completed ? {borderLeft: '6px solid chartreuse'} : {}} 
         onClick={() => handleTaskClick(currentTask.id)}    // Para marcar se foi completada
         >
            <div className="task-title">
                {currentTask.title}
            </div>
        </div>
        // <div className="task-container"> { currentTask.title } </div> 
    );
}

export default Task;