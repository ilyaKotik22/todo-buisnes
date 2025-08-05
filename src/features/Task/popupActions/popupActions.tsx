import React, {useEffect} from "react";
import './popupAction.css'
import {createPortal} from "react-dom";
import './popupAction.css'
import {useDispatch} from "react-redux";
import {popupAnotherAction} from "../store/TasksSlice.ts";
import {Check} from "lucide-react";
interface Props{
    text:string
}

export const PopupActions: React.FC<Props> = ({ text }) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        setTimeout(()=>{
            dispatch(popupAnotherAction({active:false,text:''}))
        },1000)
    },[])
    return createPortal(
        <div className={'popupAction'}>
            <Check />
            <div className="">{text}</div>

        </div>,document.body);
};