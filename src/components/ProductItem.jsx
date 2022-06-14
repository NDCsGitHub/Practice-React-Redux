import React from 'react'

function ProductItem({ product }) {
    return (
        <div className='products'>
            <div>
                {new Date(product.createdAt).toLocaleString('en-US')}
            </div>

            <h2>{product.Product_Name_EN}</h2>
            <h2>{product.Product_Name_CN}</h2>
            <h2>{product.Product_Type}</h2>
            <h2>{product.Product_Description}</h2>
            <button
                className='close'
            >X</button>
        </div>
    )
}

export default ProductItem