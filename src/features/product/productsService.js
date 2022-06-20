import axios from 'axios'

// this is the file where we define our service calls, this is going to be imported into the productSlice
// API endpoint
const API_URL = '/api/products'



// get all products
const getAllProducts = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}





// create a new product
const createProduct = async (productData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.post(API_URL, productData, config)

    return response.data.data
}


// delete a product
const deleteProduct = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + `?id=${id}`, config)

    return response.data.data

}







const productService = {
    createProduct,
    getAllProducts,
    deleteProduct,
}

export default productService