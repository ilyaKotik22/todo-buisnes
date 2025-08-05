import type {ActionDeadLine, ActionFilter, Filter, InitialStateFilter} from "./types.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


const initialState:InitialStateFilter = {
    filters: {
    },
    inputs:{
    }
}
const FilterSlice = createSlice({
    name: 'Filter',
    initialState,
    reducers: {
        createFilterSection(state: InitialStateFilter, action: PayloadAction<Filter>){
            state.filters[action.payload.name] = {
                name: action.payload.name,
                items: action.payload.items,
                ChangedItems: action.payload.ChangedItems
            }
        },
        addInFilter(state:InitialStateFilter, action: PayloadAction<ActionFilter>){
            if (!state.filters[action.payload.nameFilter].ChangedItems.includes(action.payload.value)){
                state.filters[action.payload.nameFilter].ChangedItems.push(action.payload.value)
            }

        },
        removeInFilter(state:InitialStateFilter, action: PayloadAction<ActionFilter>){
            state.filters[action.payload.nameFilter].ChangedItems =
                state.filters[action.payload.nameFilter].ChangedItems.filter((el)=> el !== action.payload.value)
        },
        createDeadLineSection(state:InitialStateFilter, action: PayloadAction<ActionDeadLine>){
            state.inputs[action.payload.nameDeadLime] = {
                name: action.payload.nameDeadLime,
                value: action.payload.value
            }
        },
        addInDeadLineSection(state:InitialStateFilter, action: PayloadAction<ActionDeadLine>){
            state.inputs[action.payload.nameDeadLime].value = action.payload.value
        }
    }
})
export const {
    createFilterSection,
    addInFilter,
    removeInFilter,
    createDeadLineSection,
    addInDeadLineSection} = FilterSlice.actions
export default FilterSlice.reducer

