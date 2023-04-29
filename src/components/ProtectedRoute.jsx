import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children}) => {
    const userToken = useSelector(state=> state.googleAuth.useDetails.accessToken)
    if (userToken) {
        return children;
    }
    <Navigate to="/login"/>
}

export default ProtectedRoute