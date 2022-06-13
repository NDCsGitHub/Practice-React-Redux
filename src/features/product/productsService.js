import axios from 'axios'

// this is the file where we define our service calls, this is going to be imported into the authslice
// API endpoint
const API_URL = '/api/products'




// create a new product
const createProduct = async (productData, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,

        }
    }

    const response = await axios.post(API_URL, productData, config)

    return response.data
}










const productService = {
    createProduct,

}

export default productService