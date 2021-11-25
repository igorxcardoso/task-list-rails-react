import React from "react";
import "./Task.css";

const Task = ({ currentTask, handleTaskClick, handleTaskDelettion }) => {
    return ( 
        <div 
         className="task-container" 
         style={currentTask.completed ? {borderLeft: '6px solid chartreuse'} : {}} 
         >
            <div 
             className="task-title"
             onClick={() => handleTaskClick(currentTask.id)}    // Para marcar se foi completada
            >
                {currentTask.title}
            </div>

            <div className="buttons-container">
                <button 
                 className="remove-task-button" 
                 onClick={() => handleTaskDelettion(currentTask.id)}
                >X</button>
            </div>
        </div>
        // <div className="task-container"> { currentTask.title } </div> 
    );
};

export default Task;