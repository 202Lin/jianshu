import axios from 'axios'
import {fromJS} from 'immutable'
import {INPUT_BLUR,INPUT_FOCUS,CHANGE_LIST,SEARCH_MOUSE_IN,SEARCH_MOUSE_LEAVE,CHANGE_SEARCH_ITEM} from './contant'
export function InputFocusAction(){
    return {
        type:INPUT_FOCUS,
        value:''
    }
}
export function InputBlurAction(){
    return {
        type:INPUT_BLUR,
        value:''
    }
}
 function changeList(data) {
    return {
        type:CHANGE_LIST,
        data:fromJS(data),
        totalPage:Math.ceil(data.length/10)
    }
}
export function getList() {
    return (dispatch) => {
        axios.get('/api/list.json').then((res) => {
            dispatch(changeList(res.data.data))/*w我们修改的时候，使用return state.set('list',action.data)，
            这个时候list是一个immutable数组，但是呢，action.data是普通数组，这样会出现类型转换，就会出错*/
        }).catch(() => console.log('出错了！'))
    }
    
}
export function searchMouseInAction() {
    return {
        type:SEARCH_MOUSE_IN
    }
}
export function searchMouseLeaveAction() {
    return {
        type:SEARCH_MOUSE_LEAVE
    }
}
export function changeItemAction(page,totalPage) {
    return {
        type:CHANGE_SEARCH_ITEM,
        page,
        totalPage
    }
}