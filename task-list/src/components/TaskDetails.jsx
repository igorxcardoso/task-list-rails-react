import React from "react";
import { useParams } from "react-router-dom";
import {useHistory} from "react-router-dom";

import MyButton from "./MyButton";

import "./TaskDetails.css"

const TaskDetails = () => {
    const params = useParams();   // É um Hook que vai pegar os parâmetros
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    };

    return ( 
        <>
            <div className="back-button-container ">
                <MyButton meuClick={handleBackButtonClick}>Voltar</MyButton>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi nobis, nemo consequatur nam, sit eaque, perferendis ducimus doloribus ratione rem error saepe explicabo velit vel eos eveniet ab eligendi.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;