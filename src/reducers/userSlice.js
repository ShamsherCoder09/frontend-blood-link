import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: {},
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.isAuthenticated = false;
            state.user = {};
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
