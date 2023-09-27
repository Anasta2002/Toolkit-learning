import { configureStore } from "@reduxjs/toolkit";
import users_slice from "./slices/users_slice";


export const store = configureStore({
    reducer: {
        users: users_slice,
    }
})