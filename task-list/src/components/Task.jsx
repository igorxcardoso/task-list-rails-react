import React from "react";
import {CgClose, CgInfo} from "react-icons/cg";
import {useHistory} from "react-router-dom"; // Usado para navegar entre páginas

import "./Task.css";
import TaskDetails from "./TaskDetails";

const Task = ({ currentTask, handleTaskClick, handleTaskDelettion }) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${currentTask.title}`)
    }

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
                >
                    <CgClose />
                </button>
                <button 
                 className="see-task-details-button" 
                 onClick={handleTaskDetailsClick}
                >
                    <CgInfo />
                </button>
            </div>
        </div>
        // <div className="task-container"> { currentTask.title } </div> 
    );
};

export default Task;