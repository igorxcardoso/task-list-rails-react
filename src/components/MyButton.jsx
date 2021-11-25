import React from "react";
import "./MyButton.css"

const MyButton = ({ children, myClick }) => {
    return (
        <button onClick={myClick} className="button">
            {children}
        </button>
    );
}

export default MyButton;