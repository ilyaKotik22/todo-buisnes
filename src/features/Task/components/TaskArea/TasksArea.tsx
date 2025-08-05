import React, {useEffect} from "react";
import {TaskItem} from "../TaskItem/TaskItem.tsx";
import './TaskArea.css'
import {useDispatch, useSelector} from "react-redux";
import type {RootStore} from "../../../../shared/store";
import {MyButton} from "../../../../shared/ui/myButton/MyButton.tsx";
import {getTasks, popupAction, upDateTasksInStorage} from "../../store/TasksSlice.ts";
import {isAfter, parseISO} from "date-fns";

interface Props{
    ClassName?: string
}

export const TaskArea: React.FC<Props> = ({ ClassName }) => {

    const TasksSelector = useSelector((state:RootStore)=> state.TasksSlice.tasks)

    const flilter1Selector = useSelector((state:RootStore)=>state.FilterSlice.filters['Тип Задачи:']?.ChangedItems)
    const flilter2Selector = useSelector((state:RootStore)=>state.FilterSlice.filters['Приоритет задачи:']?.ChangedItems)
    const flilter3Selector = useSelector((state:RootStore)=>state.FilterSlice.filters['Статус задачи:']?.ChangedItems)
    const filterInputSelector = useSelector((state:RootStore)=> state.FilterSlice.inputs["seorce"]?.value)

    useEffect(() => {

        const tasks = localStorage.getItem('Tasks')
        if (!tasks){
            localStorage.setItem('Tasks', JSON.stringify([]))
        }
        // localStorage.removeItem('Tasks')
        dispatch(getTasks())
    }, []);
    useEffect(() => {
        dispatch(upDateTasksInStorage())

    }, [TasksSelector]);
    const now = new Date()

    function translatePrivate(priority:number):string{
        if (priority === 1){
            return 'Низкий'
        }else if (priority === 2){
            return  'Средний'
        }else if (priority === 3){
            return  'Высокий'
        }else {
            return 'Все приоритеты'
        }
    }
    const dispatch = useDispatch()
    return (
        <div className={'right-side'}>
            <div className="panelTasks">
                <div className="">
                    Здесь будут отображаться ваши задачи
                </div>
                <MyButton text={'Создать задачу'} onClick={()=> dispatch(popupAction())}/>

            </div>

            <div className={ClassName}>
                {
                    TasksSelector.map((el)=>{
                        if (flilter1Selector &&(flilter1Selector.includes(el.typeTask) || flilter1Selector.includes('Все типы'))
                            &&
                            (el.name.toLowerCase().includes(filterInputSelector?.toLowerCase()))
                            &&
                            (flilter2Selector.includes(translatePrivate(el.priority)) || flilter2Selector.includes('Все приоритеты'))
                            &&
                            (flilter3Selector.includes('Все статусы')  ||
                                (flilter3Selector.includes('Активна') && el.status === 'Активна' && isAfter(parseISO(el.timePeriod),now))
                                ||
                                (flilter3Selector.includes(el.status) && el.status === 'Закончена')
                                ||
                                (flilter3Selector.includes('Пропущенна') && el.status === 'Активна' && !isAfter(parseISO(el.timePeriod),now))
                            )
                        ){
                            return(
                                <TaskItem
                                    key={el.id}
                                    id={el.id}
                                    name={el.name}
                                    description={el.description}
                                    priority={el.priority}
                                    typeTask={el.typeTask}
                                    status={el.status}
                                    timePeriod={el.timePeriod}
                                />
                            )
                        }

                    })
                }

            </div>
        </div>
    );
};