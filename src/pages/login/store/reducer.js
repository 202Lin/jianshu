import {fromJS} from 'immutable'
import {LOGIN,LOGOUT} from './contant'

const defaultState =fromJS({
    loginStatus:true,
    userName:'',
    password:''
})

export default function reudcer(state=defaultState,action) {
    switch(action.type){
        case LOGIN:
            return state.merge({
                userName:action.userName,
                password:action.password,
                loginStatus:action.status
            })
        case LOGOUT:
            return state.set('loginStatus',action.status)
        default:
            return state
    }
}