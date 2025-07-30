import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    }
})
export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>