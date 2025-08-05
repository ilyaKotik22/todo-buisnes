import type {InitialStateTasks, PopupAction, TaskItemType} from "./types.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState:InitialStateTasks = {
    tasks: [
        {
            id: 'wqrfdsqerfde',
            name: 'Задача 1',
            description: 'saddwqd DQ WA DAS ASDASAAWD DASDWAD',
            priority: 2,
            typeTask: "Работа",
            status: 'Активна',
            timePeriod: '2025-06-01'
        },
        {
            id: 'asdasdwd',
            name: 'Задача 2',
            description: 'saddwqd DQ WA DAS ASDASAAWD DASDWAD',
            priority: 1,
            typeTask: "Работа",
            status: 'Активна',
            timePeriod: '2025-07-06'
        },
        {
            id: 'qwdasdw23daqfdqefqfq',
            name: 'Задача 3',
            description: 'saddwqd DQ WA DAS ASDASAAWD DASDWAD',
            priority: 3,
            typeTask: 'Личная',
            status: 'Закончена',
            timePeriod: '2025-06-03'
        },
        {
            id: 'qwdqfvs4ddqefqfq',
            name: 'Задача 4',
            description: 'saddwqd DQ WA DAS ASDASAAWD DASDWAD',
            priority: 1,
            typeTask: "Работа",
            status: 'Активна',
            timePeriod: '2025-08-08'
        },{
            id: 'qwf11qfq',
            name: 'Задача 5',
            description: 'saddwqd DQ WA DAS ASDASAAWD DASDWAD',
            priority: 3,
            typeTask: 'Срочная',
            status: 'Закончена',
            timePeriod: '2025-08-12'
        },
        {
            id: 'qwfqwwfq',
            name: 'Задача 6',
            description: 'saddwqd DQ WA DAS ASDASAAWD DASDWAD',
            priority: 3,
            typeTask: 'Срочная',
            status: 'Активна',
            timePeriod: '2025-08-12'
        },


    ],
    popup: false,
    popupAction: {
        active: false,
        text: ''
    },
    popupTaskItem: {
        active: false,
        taskItem: {
            id: '',
            name: '',
            description: '',
            priority: 0,
            typeTask: 'Работа' ,
            status: 'Активна' ,
            timePeriod: ''
        }
    }
}
const TasksSlice = createSlice({
    name:'TasksSlice',
    initialState,
    reducers:{
        getTasks(state:InitialStateTasks){
            state.tasks = JSON.parse(localStorage.getItem('Tasks') as string) || []

        },
        upDateTasksInStorage(state:InitialStateTasks){
            localStorage.setItem('Tasks', JSON.stringify(state.tasks))
            console.log( JSON.parse(localStorage.getItem('Tasks') as string))
        },
        addTask(state:InitialStateTasks, action:PayloadAction<TaskItemType>){
            state.tasks.push(action.payload)

        },
        removeTask(state: InitialStateTasks, action:PayloadAction<TaskItemType>){
            state.tasks = state.tasks.filter((el)=> el.id !== action.payload.id)
            state.popupTaskItem.active = false


        },
        changeTask(state: InitialStateTasks, action:PayloadAction<TaskItemType>){
            for (const initialStateTask of state.tasks) {
                if (initialStateTask.id === action.payload.id){
                    initialStateTask.status = 'Закончена'
                }
            }
            state.popupTaskItem.active = false
        },
        popupAnotherAction(state:InitialStateTasks,action:PayloadAction<PopupAction>){
            state.popupAction.active = !state.popupAction.active
            state.popupAction.text = action.payload.text
        },
        popupAction(state){
            state.popup = !state.popup
        },
        popupItemAction(state){
            state.popupTaskItem.active = !state.popupTaskItem.active
        },
        showPopupItem(state:InitialStateTasks, action:PayloadAction<TaskItemType>){
            state.popupTaskItem.active = true
            state.popupTaskItem.taskItem = action.payload
        }

    }
})

export const {popupAnotherAction,
    getTasks,
    upDateTasksInStorage,
    addTask,
    popupAction,
    showPopupItem,
    popupItemAction,
    removeTask,
    changeTask} = TasksSlice.actions
export default TasksSlice.reducer