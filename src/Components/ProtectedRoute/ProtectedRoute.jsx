import React, { useContext } from 'react'
import { userContext } from '../../Context/UserContext'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const {token} = useContext(userContext)
    if (token) {
        return props.children
    } else {
        return <Navigate to="/login" />
    }
    
}
