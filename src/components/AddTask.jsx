import React, { useState } from 'react';
import "./AddTask.css"
import MyButton from './MyButton';

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
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
                <MyButton>Adicionar</MyButton>
            </div>
        </div>
    );
}

export default AddTask;