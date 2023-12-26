import Axios from './CallService.jsx'

let login = (credentials) => {
  return Axios.post('/api/v1/user/login', credentials)
}

let saveToken = (token) => {
  localStorage.setItem('token', token)
}

let logout = () => {
  localStorage.removeItem('token')
}

let isLogged = () => {
  let token = localStorage.getItem('token')
  return !!token
}

export const accountService = {
  login, saveToken, logout, isLogged
}