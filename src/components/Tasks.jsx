import React from 'react';
import Task from './Task';

const Tasks = ({ myTasks }) => {
    // debugger
    return (
        <>
            {myTasks.map((currentTask) => (     // Está passando cada elemento de myTasks para o componente Task
                <Task taskComponent={currentTask} />
            ))}
        </>
    );
};

export default Tasks;