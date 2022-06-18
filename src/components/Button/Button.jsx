import React from 'react';
import * as C from "./Button";

const Button = ({ Text, onClick, Type = "button" }) => {
    return(
        <C.Button
            type={Type}
            onClik={onClick}
        >
            {Text}
        </C.Button>
    )
};

export default Button;