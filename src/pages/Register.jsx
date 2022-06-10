import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'


function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        admin: '',
    })

    const { name, email, password, password2, admin } = formData

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
                            name='name' id='name'
                            value={name}
                            placeholder='Name'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

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

                        <input
                            type='password'
                            className='form-control'
                            name='password2' id='password2'
                            value={password2}
                            placeholder='Confirm Password'
                            onChange={(e) => {
                                handleOnChange(e)
                            }}
                        />

                        <input
                            type='text'
                            className='form-control'
                            name='admin' id='admin'
                            value={admin}
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