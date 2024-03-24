import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        showgptSearch: false
    },
    reducers:{
        toggleGptSearch : (state , action)=>{
            state.showgptSearch = !state.showgptSearch
        }
    }
})
export const {toggleGptSearch} = gptSlice.actions
export default gptSlice.reducer