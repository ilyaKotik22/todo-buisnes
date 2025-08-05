
export type TaskItemType ={
    id: string
    name: string,
    description: string,
    priority: number,
    typeTask: 'Работа' | 'Личная' | 'Срочная',
    status: 'Активна' | 'Закончена',
    timePeriod: string
}
export type InitialStateTasks = {
    tasks: TaskItemType[]
    popup: boolean
    popupAction: {
        active:boolean
        text: string
    },
    popupTaskItem: {
        active: boolean
        taskItem: TaskItemType
    }
}
export type PopupAction ={
    active:boolean
    text: string
}