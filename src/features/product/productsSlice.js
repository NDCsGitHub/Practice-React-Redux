import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productsService'


// define initial state
const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}



// create new Product
const createProduct = createAsyncThunk('products/.create', async (productData, thunkAPI) => {

    try {
        return await productService.createProduct(productData)

    } catch (error) {
        // check for error the message
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

        // return and save the message in the state, so later we can useSelector to show error in register component
        return thunkAPI.rejectWithValue(message)
    }
})




const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase()
    //         .addCase()
    //         .addCase()
    //         .addCase()
    // }
})
const { reset } = productsSlice.actions

// export
export { productsSlice, reset, }

// default export reducer to global state = store.js
export default productsSlice.reducer