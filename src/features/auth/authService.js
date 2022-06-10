import axios from 'axios'



// this is the file where we define our service calls, this is going to be imported into the authslice
// API endpoint
const API_URL = '/api/users'

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}






const authService = {
    register,
}

export default authService 