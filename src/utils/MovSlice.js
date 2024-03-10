import { createSlice } from "@reduxjs/toolkit";

const MovSlice = createSlice({
    name :'movie',
    initialState: {
        addPlayingNowMovie :null,
        trailer :null,
        popularMovie:null,
    },
    reducers:{
        addPlayingNowMovie : (state, action) =>{
             state.addPlayingNowMovie = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailer = action.payload
        },
        addPopularMovie :(state,action)=>{
            state.popularMovie = action.payload;
        }
    }
})
export const {addPlayingNowMovie , addTrailerVideo, addPopularMovie} = MovSlice.actions
export default MovSlice.reducer
