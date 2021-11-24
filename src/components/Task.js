import React from "react";

const Task = ({ taskComponent }) => {
    return ( 
        <h1> { taskComponent.title } </h1> 
    );
}

export default Task;