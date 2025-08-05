import React, {useEffect} from "react";
import './Header.css'
import {PopupTask} from "../../features/Task/popupTask/components/PopupTask.tsx";
import {PopupChoice} from "../../features/Task/popupСhoice/components/PopupChoise.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootStore} from "../../shared/store";
import {getUserFromLocalStorage} from "../../features/Auth/store/UserSlice.ts";
import {PopupActions} from "../../features/Task/popupActions/popupActions.tsx";
interface Props{
    ClassName?: string
}

export const Header: React.FC<Props> = ({ ClassName }) => {
    const popupSelector = useSelector((state:RootStore)=> state.TasksSlice.popup)
    const popupChoiceSelector = useSelector((state:RootStore)=> state.TasksSlice.popupTaskItem.active)
    const popupActionsSelector = useSelector((state:RootStore) => state.TasksSlice.popupAction)
    const userSelector = useSelector((state:RootStore)=> state.UserSlice.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserFromLocalStorage())
    }, []);

    return (
        <div className={ ClassName}>
            <nav className="Header-navigation">
                <div className="Header-nav-item"><a href="/">главная</a></div>
                <div className="Header-nav-item"><a href="/statistics">статистика</a></div>
                {!userSelector.login && <div className="Header-nav-item"><a href="/auth">войти</a></div>}
                <div className="Header-nav-item"><a style={{color: '#546AFF'}} href="/auth">{userSelector.login}</a></div>


            </nav>
            {popupSelector && <PopupTask/>}
            {popupChoiceSelector && <PopupChoice/>}
            {popupActionsSelector.active && <PopupActions text={popupActionsSelector.text}/>}

        </div>);
};