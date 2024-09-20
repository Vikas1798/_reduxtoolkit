import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        },
        removeUser(state, action){
            console.log('actriossss',action.payload)
        },
        ClearAllUser(state, action){},
    }
})
export default userSlice.reducer;
export const { addUser, removeUser, ClearAllUser} = userSlice.actions;