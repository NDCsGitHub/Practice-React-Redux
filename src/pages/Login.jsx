import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
    })
    const { Email, Password } = formData
    const handleOnChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])


    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            Email,
            Password,
        }

        dispatch(login(userData))

    }

    if (isLoading) {
        return <Spinner />
    }


    return (

        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Register
                </h1>
                <p>Login to Add Product</p>
            </section>


            <section className='form'>
                <form onSubmit={(e) => { onSubmit(e) }}>
                    <div className='form-group'>

                        <input
                            type='Email'
                            className='form-control'
                            name='Email' id='Email'
                            value={Email}
                            placeholder='Email'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                        <input
                            type='Password'
                            className='form-control'
                            name='Password' id='Password'
                            value={Password}
                            placeholder='Password'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                    </div>

                    <div className='form-group'>
                        <button type='submit' className='btn btn-block'>
                            Submit
                        </button>
                    </div>

                </form>
            </section>
        </>

    )
}

export default Login