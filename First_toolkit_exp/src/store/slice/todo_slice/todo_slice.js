import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
} 

export const todoSlice = createSlice({
    name: 'todos',
    initialState, 
    reducers: {
        addNewTask(state, {payload}) {
            state.list.push(payload)
        },
        deleteTask(state, {payload}) {
            state.list = state.list.filter(el => el.id !== payload)
        },
        changeStatus(state, {payload}) {
            const element = state.list.find(el => el.id === payload)
            element.completed = !element.completed
        },
        deleteTasks(state) {
            state.list = []
        }
    }
})

export const { addNewTask, deleteTask, changeStatus, deleteTasks } = todoSlice.actions;
export default todoSlice.reducer;