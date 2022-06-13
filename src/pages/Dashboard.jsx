import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function Dashboard() {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)

    // check user, if user state is missing, redirect to login
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <div>Dashboard</div>
    )
}


export default Dashboard