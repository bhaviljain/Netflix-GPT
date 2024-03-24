import { configureStore } from "@reduxjs/toolkit";
import userLoginLogout from "./userSlice";
import MovieReducers from "./MovSlice";
import GptSearch  from "./gptSlice";
import ConfigSlice from "./ConfigSlice"

const appStore = configureStore({
    reducer:{
        userLoginLogout : userLoginLogout,
        Movie : MovieReducers,
        gpt: GptSearch,
        config : ConfigSlice
    },
})
export default appStore