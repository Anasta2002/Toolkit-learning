import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    list: [],
}

export const fetchUsers = createAsyncThunk(
    'Users/fetchUsers',
    async () => {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        return data.users;
    }
)

const user_slice = createSlice({
    name: 'Users',
    initialState,
    reducers: {
        deleteCard(state, action) {
            state.list = state.list.filter(el => el.id !== action.payload)
        },
        decreaseAge(state, action) {
            const target_card = state.list.find(el => el.id === action.payload)
            target_card.age > 1 ? 
                target_card.age-- : 
                state.list = state.list.filter(el => el.id !== action.payload)
        },
        increaseAge(state, action) {
            const target_card = state.list.find(el => el.id === action.payload)
            target_card.age++
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {    //pending
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {   //success
                state.status = 'ready'
                state.list = action.payload
            })
            .addCase(fetchUsers.rejected, (state) => {   //rejected
                state.status = 'error'
            })
    },
})

export default user_slice.reducer;
export const { deleteCard, increaseAge, decreaseAge } = user_slice.actions
