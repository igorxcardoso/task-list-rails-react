import React from 'react';
import Task from './Task';

const Tasks = ({ myTasks, handleTaskClick }) => {
    // debugger
    return (
        <>
            {myTasks.map((currentTask) => (     // Está passando cada elemento de myTasks para o componente Task
                <Task 
                    currentTask={currentTask} 
                    handleTaskClick={handleTaskClick}
                />
            ))}
        </>
    );
};

export default Tasks;