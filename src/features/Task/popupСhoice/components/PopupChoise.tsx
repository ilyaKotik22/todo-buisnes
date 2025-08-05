import React from "react";
import {createPortal} from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import type {RootStore} from "../../../../shared/store";
import './PopupChoise.css'
import {MyButton} from "../../../../shared/ui/myButton/MyButton.tsx";
import {changeTask, popupAnotherAction, popupItemAction, removeTask} from "../../store/TasksSlice.ts";

interface Props{
    ClassName?: string
}

export const PopupChoice: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const TaskSelector = useSelector((state:RootStore)=> state.TasksSlice.popupTaskItem.taskItem)
    return createPortal(
        <div className={ 'PopupChoice'}>
            <div onClick={()=> dispatch(popupItemAction())} className="PopupChoice-bg"></div>
            <div className="PopupChoice-body">
                <div className="PopupChoice-header">Задача</div>

                <div className="PopupChoice-section">
                    <div className="PopupChoice-sectionHeader">Название задачи</div>
                    <div className="PopupChoice-desc">{TaskSelector.name}</div>
                </div>
                <div className="PopupChoice-section">
                    <div className="PopupChoice-sectionHeader">Описание задачи</div>
                    <div className="PopupChoice-desc">{TaskSelector.description}</div>
                </div>
                <div className="PopupChoice-buttonSection">
                    <MyButton text={'Удалить задачу'} onClick={()=>{
                        dispatch(popupAnotherAction({active:true, text: 'Задача удаленна'}))
                        dispatch(removeTask(TaskSelector))
                    }}/>
                    <MyButton text={'Пометить как выполено'} onClick={()=>{
                        dispatch(popupAnotherAction({active:true, text: 'Задача выполнена'}))

                        dispatch(changeTask(TaskSelector))
                    } }/>
                </div>
            </div>
        </div>,
        document.body);
};