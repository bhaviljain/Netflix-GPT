import { configureStore } from "@reduxjs/toolkit";
import userLoginLogout from "./userSlice";
import MovieReducers from "./MovSlice";
import GptSearch  from "./gptSlice";
const appStore = configureStore({
    reducer:{
        userLoginLogout : userLoginLogout,
        Movie : MovieReducers,
        gpt: GptSearch
    },
})
export default appStore