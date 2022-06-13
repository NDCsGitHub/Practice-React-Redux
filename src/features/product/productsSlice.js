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
        // get token from user state using thunkAPi
        const token = thunkAPI.getState().auth.user.data.token
        return await productService.createProduct(productData, token)

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
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products.push(action.payload)
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})
const { reset } = productsSlice.actions

// export
export { productsSlice, reset, createProduct }

// default export reducer to global state = store.js
export default productsSlice.reducer