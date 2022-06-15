import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from './productsService'





// get all products
const getAllProducts = createAsyncThunk('products/getAll', async (_, thunkAPI) => {
    try {
        // get token from user state using thunkAPi
        const token = thunkAPI.getState().auth.user.data.token
        return await productService.getAllProducts(token)

    } catch (error) {
        // check for error the message
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

        // return and save the message in the state, so later we can useSelector to show error in register component
        return thunkAPI.rejectWithValue(message)
    }

})



// create new Product
const createProduct = createAsyncThunk('products/create', async (productData, thunkAPI) => {

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



// delete a Product
const deleteProduct = createAsyncThunk('products/delete', async (id, thunkAPI) => {

    try {
        // get token from user state using thunkAPi
        const token = thunkAPI.getState().auth.user.data.token
        return await productService.deleteProduct(id, token)

    } catch (error) {
        // check for error the message
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

        // return and save the message in the state, so later we can useSelector to show error in register component
        return thunkAPI.rejectWithValue(message)
    }
})






// define initial state
const initialState = {
    products: { data: [] },
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// create product slice
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            // create Product
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products['data'].push(action.payload)
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // get all products
            .addCase(getAllProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products = action.payload
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            // delete product
            .addCase(deleteProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.products['data'] = state.products['data'].filter((product) => {
                    return product._id !== action.payload._id
                })
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }


})
const { reset } = productsSlice.actions

// export
export { productsSlice, reset, createProduct, getAllProducts, deleteProduct }

// default export reducer to global state = store.js
export default productsSlice.reducer