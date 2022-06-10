import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const { email, password } = formData




    const handleOnChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()



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
                            type='email'
                            className='form-control'
                            name='email' id='email'
                            value={email}
                            placeholder='Email'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                        <input
                            type='password'
                            className='form-control'
                            name='password' id='password'
                            value={password}
                            placeholder='password'
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