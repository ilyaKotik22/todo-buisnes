import {configureStore} from "@reduxjs/toolkit";
import FilterSlice from "../../entiteis/filter/store/FilterSlice.ts";
import TasksSlice from "../../features/Task/store/TasksSlice.ts";
import UserSlice from "../../features/Auth/store/UserSlice.ts";
export const store = configureStore({
    reducer: {
        FilterSlice,
        TasksSlice,
        UserSlice

    }
})
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>