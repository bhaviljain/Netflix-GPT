import { createSlice } from "@reduxjs/toolkit";

const MovSlice = createSlice({
    name :'movie',
    initialState: {
        addPlayingNowMovie :null,
        trailer :null,
        popularMovie:null,
        TopRated: null,
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
        },
        addTopRatedMovies: (state,action)=>{
            state.TopRated = action.payload
        }
    }
})
export const {addPlayingNowMovie , addTrailerVideo, addPopularMovie , addTopRatedMovies} = MovSlice.actions
export default MovSlice.reducer
