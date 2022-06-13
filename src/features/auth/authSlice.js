import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'



// get user from localstorage
const user = JSON.parse(localStorage.getItem('user'))


// define initial states
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}








// Register User, export this so we can use in it other components
const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {

        // check for error the message
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

        // return and save the message in the state, so later we can useSelector to show error in register component
        return thunkAPI.rejectWithValue(message)
    }
})

// Login User, export this so we can use in it other components
const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {

        // check for error the message
        const message = (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()

        // return and save the message in the state, so later we can useSelector to show error in register component
        return thunkAPI.rejectWithValue(message)
    }
})


// logout user
const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})








const authSlice = createSlice({
    name: 'auth',
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
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })


    }
})
const { reset } = authSlice.actions



// export reset and reducer
export { authSlice, reset, register, logout, login }

// export reducer to global state = store.js 
export default authSlice.reducer