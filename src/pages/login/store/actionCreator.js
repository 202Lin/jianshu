import axios from 'axios'
import {LOGIN,LOGOUT} from './contant'

const loginAction = (userName,password,status) => ({
    type:LOGIN,
    userName,
    password,
    status
})

export const logoutAction = () => ({
    type:LOGOUT,
    status:true
})

export const handleLogin = (userName,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?userName='+userName+'&password='+password)
        .then((res) => {
            dispatch(loginAction(userName,password,res.data.success))
        })
    }
}