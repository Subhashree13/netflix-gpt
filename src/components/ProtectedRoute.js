import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router';
const ProtectedRoute = ({children}) => {
    const isLoggedInUser = useSelector((store)=>store.user.isLoggedIn);
  return isLoggedInUser? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoute