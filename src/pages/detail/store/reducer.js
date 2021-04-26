import {fromJS} from 'immutable'
import {GET_DETAIL_DATA} from './contant'


const defaultState = fromJS({
    detail:[],
    index:1
})

export default function reducer(state=defaultState,action) {
    switch(action.type){
        case GET_DETAIL_DATA:
            return state.set('detail',action.value).set('index',action.index)
        default:
            return state
}
}