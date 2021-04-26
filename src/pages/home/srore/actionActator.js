import axios from 'axios'
import * as contant from './contant'

const getHomeDataAction = (result) => {
    return ({
        type:contant.CHANGE_HOME_DATA,
        topicList:result.topicList,
        listData:result.listData,
        recommendList:result.recommendList,
    })
}
const getMoreDataAction = (result) => ({
    type:contant.GET_MORE_DATA,
    moreData:result.listData
})


export const getHomeData = () =>{
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res) => {

            dispatch(getHomeDataAction(res.data))
    })
    .catch(
        (error) =>console.log('我错了'+error)
    )
}
}
export const getMoreData = () => {
    return (dispatch) => {
        axios.get('/api/homeMore.json')
        .then((res) => {
            dispatch(getMoreDataAction(res.data))
        })
        .catch((error) => {
            console.log('我错了'+error)
        })
    }
}

export const changeBackTopAction = (value) => ({
    type:contant.CHANGE_BACKTOP,
    scrollTop:value
})