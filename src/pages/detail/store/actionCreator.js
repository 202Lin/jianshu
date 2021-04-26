import axios from 'axios'
import {GET_DETAIL_DATA} from './contant'

const getDetailAction = (value,index) => ({
    type:GET_DETAIL_DATA,
    value,
    index
})

export const getDetailData = (index) =>{
    return (dispatch) => {
        axios.get('/api/detail.json')
        .then((res) => {
            dispatch(getDetailAction(res.data.data,index))
        })
    }
}

