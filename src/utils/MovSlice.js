import { createSlice } from "@reduxjs/toolkit";

const MovSlice = createSlice({
    name :'movie',
    initialState: {
        addPlayingNowMovie :null,
        trailer :null,
    },
    reducers:{
        addPlayingNowMovie : (state, action) =>{
             state.addPlayingNowMovie = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailer = action.payload
        }
    }
})
export const {addPlayingNowMovie , addTrailerVideo} = MovSlice.actions
export default MovSlice.reducer
