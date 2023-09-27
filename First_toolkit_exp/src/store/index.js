import { configureStore} from '@reduxjs/toolkit'
import todo_slice from './slice/todo_slice/todo_slice';


export const store = configureStore({
    reducer: {
        todos: todo_slice,
    }
})