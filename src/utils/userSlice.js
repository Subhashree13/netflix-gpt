import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        authenticatedUser: (state, action)=>{
           state.isLoggedIn = action.payload;
        }
    }
})
export const {authenticatedUser} = userSlice.actions;
export default userSlice.reducer;