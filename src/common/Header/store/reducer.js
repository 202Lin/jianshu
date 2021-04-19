import {INPUT_BLUR,INPUT_FOCUS,CHANGE_LIST,SEARCH_MOUSE_IN,SEARCH_MOUSE_LEAVE,CHANGE_SEARCH_ITEM} from './contant'
import {fromJS} from 'immutable'
const defaultState = fromJS({//因为state对象是不能修改的，所以我们使用facebook提供的一个库,使用fromJS会让state变成一个immutable对象
    //改变他用set，获取用get，immutable对象不会改变state，而是会结合原来的state返回一个新的对象
    foused:false,
    list:[],
    mouseIn:false,
    page:1,
    totalPage:1
})
export default function reducer(state=defaultState,action) {
    switch(action.type){
        case INPUT_FOCUS:
            return state.set('foused',true);
        case INPUT_BLUR:
            return state.set('foused',false);
        case  CHANGE_LIST:
            return state.set('list',action.data).set('totalPage',action.totalPage);
        case SEARCH_MOUSE_IN:
            return state.set('mouseIn',true)
        case SEARCH_MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case CHANGE_SEARCH_ITEM:
            if(action.page<action.totalPage){
                return state.set('page',action.page+1)
            }else{
                return state.set('page',1)
            }
        default:
            return state; 
    }

}