import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../features/product/productsSlice'





export default function ProductForm() {

    const [Product_Name_EN, setProduct_Name_EN] = useState('')
    const [Product_Name_CN, setProduct_Name_CN] = useState('')
    const [Product_Type, setProduct_Type] = useState('')
    const [Product_Description, setProduct_Description] = useState('')



    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createProduct({

        }))

        setProduct_Name_EN('')
        setProduct_Name_CN('')
        setProduct_Type('')
        setProduct_Description('')
    }



    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor='text'> Product </label>
                    <input
                        placeholder='Product Name EN'
                        type='text'
                        name='text'
                        id='text'
                        value={Product_Name_EN}
                        onChange={(e) => {
                            setProduct_Name_EN(e.target.value)
                        }}
                    />
                    <input
                        placeholder='Product Name CN'
                        type='text'
                        name='text'
                        id='text'
                        value={Product_Name_CN}
                        onChange={(e) => {
                            setProduct_Name_CN(e.target.value)
                        }}
                    />
                    <input
                        placeholder='Product Type'
                        type='text'
                        name='text'
                        id='text'
                        value={Product_Type}
                        onChange={(e) => {
                            setProduct_Type(e.target.value)
                        }}
                    />
                    <input
                        placeholder='Product Description'
                        type='text'
                        name='text'
                        id='text'
                        value={Product_Description}
                        onChange={(e) => {
                            setProduct_Description(e.target.value)
                        }}
                    />
                </div>

                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>Submit</button>

                </div>




            </form>
        </section>
    )
}
