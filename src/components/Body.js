import React from 'react'
import Browse from './Browse'
import Login from './Login'
import {createBrowserRouter, RouterProvider} from 'react-router';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import ProtectedRoute from './ProtectedRoute';
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element: <Login/>
        },
        {
            element:<ProtectedRoute/>,
            children :[
                {
                    path:'/browse',
                    element: <Browse/>
                }
            ]
        }
        
    ])
  return (
    <div>
        <Provider store={appStore}>
        <RouterProvider router={appRouter}/>
        </Provider>
       
    </div>
  )
}

export default Body