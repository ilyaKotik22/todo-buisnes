export type Filter ={
    name: string
    items: string[]
    ChangedItems: string[]
}
export type DeadLine = {
    name: string
    value: string
}
export type InitialStateFilter ={
    filters: {
        [key: string]: Filter
    }
    inputs:{
        [key: string]: DeadLine
    }
}

export type ActionFilter = {
    nameFilter: string
    value: string
}
export type ActionDeadLine ={
    nameDeadLime: string
    value: string
}
