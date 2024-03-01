import { createSlice } from "@reduxjs/toolkit";

const MovSlice = createSlice({
    name :'movie',
    initialState: {
        addPlayingNowMovie :null
    },
    reducers:{
        addPlayingNowMovie : (state, action) =>{
             state.addPlayingNowMovie = action.payload
        }
    }
})
export const {addPlayingNowMovie} = MovSlice.actions
export default MovSlice.reducer
