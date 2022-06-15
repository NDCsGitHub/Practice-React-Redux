import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createProduct } from '../features/product/productsSlice'
import { toast } from 'react-toastify'




export default function ProductForm() {

    const [productNameEN, setProductNameEN] = useState('')
    const [productNameCN, setProductNameCN] = useState('')
    const [productType, setProductType] = useState('')
    const [productDescription, setProductDescription] = useState('')



    const dispatch = useDispatch()
    const { isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.products
    )


    const onSubmit = (e) => {
        e.preventDefault()

        const productData = {
            productNameEN,
            productNameCN,
            productType,
            productDescription,
        }

        dispatch(createProduct({ ...productData }))

        setProductNameEN('')
        setProductNameCN('')
        setProductType('')
        setProductDescription('')
    }


    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            toast.success('Product Added')
        }
    }, [isError, isLoading, isSuccess, message])


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
                        value={productNameEN}
                        onChange={(e) => {
                            setProductNameEN(e.target.value)
                        }}
                    />
                    <input
                        placeholder='Product Name CN'
                        type='text'
                        name='text'
                        id='text'
                        value={productNameCN}
                        onChange={(e) => {
                            setProductNameCN(e.target.value)
                        }}
                    />
                    <input
                        placeholder='Product Type'
                        type='text'
                        name='text'
                        id='text'
                        value={productType}
                        onChange={(e) => {
                            setProductType(e.target.value)
                        }}
                    />
                    <input
                        placeholder='Product Description'
                        type='text'
                        name='text'
                        id='text'
                        value={productDescription}
                        onChange={(e) => {
                            setProductDescription(e.target.value)
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
