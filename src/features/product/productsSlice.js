import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'



// define initial state
const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase()
            .addCase()
            .addCase()
            .addCase()
    }
})
const { reset } = productsSlice.actions

// export
export { productsSlice, reset }

// default export reducer to global state = store.js
export default productsSlice.reducer