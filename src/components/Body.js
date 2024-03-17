import Login from './Login'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import MovieDetailsPage from './MovieDetailsPage'
import Header from './Header'
import Layout from './Layout'

import { Outlet } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
      {
        path: '/',
        element : <Layout />,
        children:[
       {
        path: '/',
        element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
          path: "/browse/:movieID",
          element: <MovieDetailsPage/>,
        },
        
    ]}
    ])


   


  return (
    <div>
<RouterProvider router={appRouter}>


  </RouterProvider>

    </div>
  )
}

export default Body