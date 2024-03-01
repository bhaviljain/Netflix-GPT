import { configureStore } from "@reduxjs/toolkit";
import userLoginLogout from "./userSlice";
import MovieReducers from "./MovSlice";

const appStore = configureStore({
    reducer:{
        userLoginLogout : userLoginLogout,
        Movie : MovieReducers,
    },
})
export default appStore