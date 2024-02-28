import { configureStore } from "@reduxjs/toolkit";
import userLoginLogout from "./userSlice";

const appStore = configureStore({
    reducer:{
        userLoginLogout : userLoginLogout,
    },
})
export default appStore