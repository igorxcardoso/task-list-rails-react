import React from "react";
import "./MyButton.css"

const MyButton = ({ children, meuClick }) => {
    return (
        <button onClick={meuClick} className="button">
            {children}
        </button>
    );
}

export default MyButton;