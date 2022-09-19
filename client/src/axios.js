import axios from "axios";
import toast from "react-hot-toast";

const baseURL = "http://localhost:5000/api/"
const api = axios.create({
    baseURL : baseURL,
    withCredentials : true,
});


api.interceptors.response.use(null , (error) => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(expectedError){
        toast.error(error.response.data.message);
    }
})

export const login = async (data) => api.post('auth/login', data, {
    headers : {
        "Content-type" : "application/json",
    }
});


export const signup = async (data) => api.post('auth/signup', data, {
    headers : {
        "Content-type" : "multipart/form-data",
    }
});

export default api;

// localhost:5000/api/auth/signup

