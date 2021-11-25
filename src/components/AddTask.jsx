import React, { useState } from 'react';
import "./AddTask.css"
import MyButton from './MyButton';
import "./MyButton.css"

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => { // Vai add a task
        handleTaskAddition(inputData);
        setInputData(""); // Vai limpar o input
    }

    return (
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} // Vai passar a função sem parametro inicialmente
                value={inputData}
                className="add-task-input" 
                type="text"
            />

            <div className="add-task-button-container">
                <MyButton meuClick={handleAddTaskClick}>Adicionar</MyButton>
            </div>
        </div>
    );
}

export default AddTask;