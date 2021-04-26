import * as contant from './contant'

const defaultState ={
    topicList:[],
    listData:[],
    recommendList:[],
    scrollTop:false
}
export default function reducer(state=defaultState,action) {
    switch(action.type) {
        case contant.CHANGE_HOME_DATA:
            const newState = JSON.parse(JSON.stringify(state))//immutable.js使用失败，所以用的笨方法，深拷贝
            newState.recommendList = action.recommendList
            newState.topicList = action.topicList
            newState.listData = action.listData
            return newState
        case contant.GET_MORE_DATA:
            const newState1 = JSON.parse(JSON.stringify(state))
            newState1.listData = newState1.listData.concat(action.moreData)//concat连接几个数组，但是不会改变原数组，所以取返回值
            return newState1
        case contant.CHANGE_BACKTOP:
            const newState2 = JSON.parse(JSON.stringify(state))
            newState2.scrollTop = action.scrollTop
            return newState2
        default:
            return state
    }
    
}