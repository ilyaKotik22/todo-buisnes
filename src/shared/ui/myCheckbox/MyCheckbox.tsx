import React from "react";
import './MyCheckbox.css'

interface Props{
    ClassName?: string
    text: string
    changed?: boolean
    onChange: ()=> void
}

export const MyCheckbox: React.FC<Props> = ({text,onChange,changed }) => {
    return (
        <label className={ 'myCheckbox'}>
            <input onChange={onChange} checked={changed}  type={"checkbox"}/>
            <span></span>
            {text}
        </label>);
};