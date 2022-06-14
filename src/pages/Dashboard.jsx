import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ProductForm from '../components/ProductForm'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { getAllProducts, reset } from '../features/product/productsSlice'
import ProductItem from '../components/ProductItem'

function Dashboard() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { products, isLoading, isError, message } = useSelector((state) => state.products)

    // check user, if user state is missing, redirect to login
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (!user) {
            navigate('/login')
        }

        dispatch(getAllProducts())

        // when we leave the dashboard, clear products out
        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, dispatch, message])




    if (isLoading) {
        return <Spinner />
    }


    return (
        <>
            <section className='heading '>
                <h1>Welcome {user && user.name}</h1>
                <p>Product Dashboard</p>
            </section>

            <ProductForm />


            <section className='content'>
                {products.data.length > 0 ? (
                    <div className='products'>
                        {products.data.map((product) => (
                            <ProductItem
                                key={product._id}
                                product={product}
                            />
                        ))}
                    </div>
                ) : (
                    <h3>'No Products Available'</h3>
                )}
            </section>


        </>
    )
}


export default Dashboard