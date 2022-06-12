import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'


function Register() {

    // define navigate
    const navigate = useNavigate()

    // define form data state
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: '',
        Password2: '',
        Admin: '',
    })
    const { Name, Email, Password, Password2, Admin } = formData

    // change input field data on change
    const handleOnChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // define dispatch to send data to global state
    const dispatch = useDispatch()

    // deconstruct states from the global state using selector
    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )


    // check for error, then reset the state
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    // submit data via dispatch
    const onSubmit = (e) => {
        e.preventDefault()
        if (Password !== Password2) {
            toast.error('Password do not match')
        } else {
            const userData = {
                Name,
                Email,
                Password,
            }
            dispatch(register(userData))
        }
    }


    if (isLoading) {
        return <Spinner />
    }




    return (

        <>
            <section className='heading'>
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account</p>
            </section>


            <section className='form'>
                <form onSubmit={(e) => { onSubmit(e) }}>
                    <div className='form-group'>
                        <input
                            type='text'
                            className='form-control'
                            name='Name'
                            id='Name'
                            value={Name}
                            placeholder='Name'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                        <input
                            type='email'
                            className='form-control'
                            name='Email' id='Email'
                            value={Email}
                            placeholder='Email'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                        <input
                            type='password'
                            className='form-control'
                            name='Password' id='Password'
                            value={Password}
                            placeholder='Password'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                        <input
                            type='password'
                            className='form-control'
                            name='Password2' id='Password2'
                            value={Password2}
                            placeholder='Confirm Password'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                        <input
                            type='text'
                            className='form-control'
                            name='Admin' id='Admin'
                            value={Admin}
                            placeholder='Admin'
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

export default Register