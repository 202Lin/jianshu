import {fromJS} from 'immutable'

const defaultState =fromJS({
    topicList:[],
    listData:[],
    recommendList:[]
})
export default function reducer(state=defaultState,action) {
    switch(action.type) {
        case 'change_home_data':
            console.log(action.recommendList)//可以输出请求过来的数据
             state.merge({//修改数据
                topicList:fromJS(action.topicList),
                listData:fromJS(action.listData),
                recommendList:fromJS(action.recommendList),
            })
            console.log(state.toJS())//输出三个空数组,
            return state
        default:
            return state
    }
    
}