
import './popupTask.css'
import {createPortal} from "react-dom";
import {useDispatch} from "react-redux";
import {addTask, popupAction, popupAnotherAction} from "../../store/TasksSlice.ts";
import { useState} from "react";
import {addDays, format} from "date-fns";



export function PopupTask() {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [prior, setPrior] = useState(1)
    const [typeTask, setTypeTask] = useState<"Работа" | "Личная" | "Срочная">('Работа')
    const [time, setTime] = useState(0)

    const now = new Date();



    function controllerValue(value:string){
        if(Number(value)){

            setTime(Number(value))
        }

    }


    return createPortal(
        <div className={'popupTask'}>
            <div onClick={() => dispatch(popupAction())} className="bg"></div>
            <div className="popupTask-body">
                <div className="header">Создание задачи</div>
                <div className="popupTask-section">
                    <div className="">Название задачи</div>
                    <input onChange={(el)=> setName(el.target.value)}/>
                </div>
                <div className="popupTask-section">
                    <div className="">Описание задачи</div>
                    <textarea onChange={(el)=> setDesc(el.target.value)}/>
                </div>
                <div className="popupTask-section">
                    <div className="">Приоритет задачи</div>
                    <div className="popupTask-prior">
                        <button className={prior >= 1 ? '' : 'passive'} onClick={()=> setPrior(1)}></button>
                        <button  className={prior >= 2 ? '' : 'passive'} onClick={()=> setPrior(2)}></button>
                        <button  className={prior >= 3 ? '' : 'passive'} onClick={()=> setPrior(3)}></button>
                    </div>
                </div>
                <div className="popupTask-section">
                    <div className="">Тип задачи</div>
                    <div className="popupTask-typeTask">
                        {}
                        <button className={typeTask === 'Работа' ? '' : 'passive'} onClick={()=> setTypeTask('Работа')}>Работа</button>
                        <button className={typeTask === 'Личная' ? '' : 'passive'} onClick={()=> setTypeTask('Личная')}>Личное</button>
                        <button className={typeTask === 'Срочная' ? '' : 'passive'} onClick={()=> setTypeTask('Срочная')}>Срочная</button>
                    </div>
                </div>
                <div className="popupTask-section time">
                    <div className="">Продлжительность задачи</div>
                    <input onChange={(ev)=>controllerValue(ev.target.value)} />
                    <span>дней</span>
                </div>
                <div className="popupTask-section butt">
                    <button onClick={() => dispatch(popupAction())} id={'dd'}>отменить создание</button>
                    <button onClick={()=> {
                        dispatch(addTask(
                            {
                                id:crypto.randomUUID(),
                                name:name,
                                description: desc,
                                priority:prior,
                                typeTask:typeTask,
                                status: 'Активна',
                                timePeriod: format(addDays(now,time), 'yyyy-MM-dd')
                            }
                            ))
                        dispatch(popupAction())
                        dispatch(popupAnotherAction({active:true, text: 'Задача создана'}))


                    }}>Создать задачу</button>
                </div>
            </div>

        </div>,
        document.body
    );
}