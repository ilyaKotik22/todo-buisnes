import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ActionUser, InitialStateUser} from "./types.ts";

const initialState:InitialStateUser = {
    user: {
        login:'',
        password: '',

    }
}
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        getUserFromLocalStorage(state:InitialStateUser){
            state.user = JSON.parse(localStorage.getItem('User') as string)
        },
        addUser(state:InitialStateUser, action: PayloadAction<ActionUser>){
            state.user = action.payload
        },
        removeUser(){

        }
    }
})
export default userSlice.reducer
export const {getUserFromLocalStorage,removeUser,addUser} = userSlice.actions