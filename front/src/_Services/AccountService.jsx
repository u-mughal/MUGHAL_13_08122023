import axios from "axios";
import { loginFail, loginSuccess, logoutSuccess, isToken } from "@/Redux/Slices/LoginSlice";
import { userFail, userLogout, userSuccess, userUpdateFail, userUpdateSuccess } from "@/Redux/Slices/UserSlice";


const BASE_URL = "http://localhost:3001/api/v1";


const login = (email, password, rememberMe) => (dispatch) => {
    axios.post(BASE_URL + "/user/login", { email, password })
        .then((response) => {
            if (rememberMe) {
                localStorage.setItem("token", JSON.stringify(response.data.body.token));
            }else{
                sessionStorage.setItem("token", JSON.stringify(response.data.body.token));
            }
            dispatch(loginSuccess(response.data))
            return response.data;
        })
        .catch((err) => {
            dispatch(loginFail(err.response.data.message))
        })
}


const userProfile = (value_token) => (dispatch) => {
    const token= localStorage.getItem("token") !== null ? localStorage.getItem("token").slice(1,localStorage.getItem("token").length-1) : value_token;
    axios.post(BASE_URL + "/user/profile", { token }, { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            dispatch(userSuccess(response.data))
            dispatch(isToken())
        })
        .catch((err) => {
            dispatch(userFail(err.response))
        })
}


const updateProfile = (firstName, lastName, value_token) => (dispatch) => {
    const token= localStorage.getItem("token") !== null ? localStorage.getItem("token").slice(1,localStorage.getItem("token").length-1) : value_token;
    axios.put(BASE_URL + "/user/profile",
        { firstName: firstName, lastName: lastName },
        { headers: { "Authorization": `Bearer ${token}` } 
    })
    .then((res)=>{
        dispatch(userUpdateSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(userUpdateFail(err.response))
    })
}

const logout = () => (dispatch) => {
    sessionStorage.clear();
    localStorage.removeItem('token')
    dispatch(userLogout());
    dispatch(logoutSuccess());
}

const auth_service = { login, logout, userProfile, updateProfile }

export default auth_service