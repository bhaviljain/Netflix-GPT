import { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
    const [count, setCount] = useState(0)
  
    return (
      <>
    <Header />
    <Outlet />
      </>
    )
  }
  
  export default Layout