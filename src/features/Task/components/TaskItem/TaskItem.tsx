import React from "react";
import './TaskItem.css'
import {useDispatch} from "react-redux";
import {showPopupItem} from "../../store/TasksSlice.ts";
import {isAfter, parseISO} from "date-fns";
interface Props{
    id: string,
    name: string,
    description: string,
    priority: number,
    typeTask: 'Работа' | 'Личная' | 'Срочная',
    status: 'Активна' | 'Закончена',
    timePeriod: string
}

export const TaskItem: React.FC<Props> = ({id, name,description,priority,typeTask,status,timePeriod }) => {
    const dispatch = useDispatch()
    const now = new Date()
    function createPriority(value:number){
        const ans = []
        for (let i = 0; i < 3; i+=1){
            ans.push(
                <div className={i<value ? 'TaskItem-priorityItem active' : 'TaskItem-priorityItem'}>
                </div>
            )
        }
        return ans
    }
    return (
        <div onClick={()=>dispatch(showPopupItem({id: id,name:name,description:description,priority:priority,typeTask: typeTask,status:status,timePeriod:timePeriod}))} className='TaskItem'>
            <div className="TaskItem-header">
                {name}
            </div>

            <div className="TaskItem-Section">
                <div className="TaskItem-name">
                    Приоритет:
                </div>
                <div className="TaskItem-priority">

                    {createPriority(priority)}
                </div>
            </div>

            <div className="TaskItem-Section">
                <div className="TaskItem-name">
                    Тип Задачи:
                </div>
                {typeTask}
            </div>

            <div className=" mode">
                <div className="TaskItem-Section">
                    <div className="TaskItem-name">
                        Статус:
                    </div>
                    {status !== 'Закончена' ? (isAfter(now,parseISO(timePeriod),) ? 'пропущенно' :"активно") : 'закончена'}
                </div>
                <div className="TaskItem-Section">
                    <div className="TaskItem-name">
                        срок задачи:
                    </div>
                    {timePeriod}
                </div>
            </div>

            <div className={`TaskItem-Section status ${status !== 'Закончена' ?(isAfter(now,parseISO(timePeriod)) ? 'later' : 'active') : 'over'}`}>

            </div>

        </div>);
};