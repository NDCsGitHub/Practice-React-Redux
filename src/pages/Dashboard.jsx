import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductForm from '../components/ProductForm'


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
        <>
            <section className='heading '>
                <h1>Welcome {user && user.name}</h1>
                <p>Product Dashboard</p>
            </section>

            <ProductForm />
        </>
    )
}


export default Dashboard