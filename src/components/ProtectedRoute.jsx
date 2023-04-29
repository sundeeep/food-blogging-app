import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const userDetails = useSelector((state) => state.googleAuth.userDetails);
    console.log(userDetails.accessToken)
    if (!userDetails.accessToken) {
        return <Navigate to="/login" replace={true} />;
    } else {
        return children
    }
}

export default ProtectedRoute