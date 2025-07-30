import './myButton.css'

import React from "react";

interface Props{
    onClick: ()=> void
    text: string
}

export const MyButton: React.FC<Props> = ({ onClick,text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>);
};