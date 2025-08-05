import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addInDeadLineSection, createDeadLineSection} from "../store/FilterSlice.ts";
import {useDebounce} from "../debounce.ts";

interface Props{
    ClassName?: string
    nameSection: string,

}

export const InputSection: React.FC<Props> = ({nameSection} ) => {
    const dispatch = useDispatch()
    const [inputValue,setInputValue] = useState<string>('')

    useEffect(() => {
        dispatch(createDeadLineSection({nameDeadLime: nameSection, value: ''}))
    }, []);

    const debouncedValue = useDebounce(inputValue, 300);

    useEffect(() => {
        dispatch(addInDeadLineSection({nameDeadLime: nameSection,value: debouncedValue}))
        // Выполняем запрос или другую логику с debouncedValue
        console.log('Debounced value:', debouncedValue);
    }, [debouncedValue]);
    return (
        <div className="FilterInput">

            <div className="FilterInput-time">
                <input onChange={(ev)=> setInputValue(ev.target.value)}/>

            </div>

        </div>
    )
};